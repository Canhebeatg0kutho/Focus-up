import { useState } from "react"
import Nav from "../../components/nav"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./cal.module.css"
import Buttons from '../../components/Tabs/Buttons';


const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
      title: "Big Meeting",
      start: new Date(2022, 11, 0),
      end: new Date(2022, 11, 0),
  },
  {
      title: "Vacation",
      start: new Date(2022, 11, 7),
      end: new Date(2022, 11, 10),
  },
  {
      title: "Conference",
      start: new Date(2022, 11, 20),
      end: new Date(2022, 11, 23),
  },
];



export default function App(){
    const [newEvent,setNewEvent] = useState({title:"", start:"", end: ""})
    const [allEvents,setAllEvents]= useState(events)

    function handleAddEvent (){
      setAllEvents([...allEvents,newEvent])

    }



return (
 <div className="app">
   <Nav/>
   <Buttons/>
   <h1>Calendar</h1>
   <h2>Add new event</h2>
   <div>
    <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }}
    value={newEvent.title} onChange={(e) => setNewEvent({...newEvent,title: e.target.value})}/> 
    <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
    <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />   
    <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>Add Event</button>
    </div>


   <div className={classes.cal}>
   <Calendar localizer={localizer}
    events={allEvents}
     startAccessor="start"
      endAccessor= "end"
       style={{ height: 500, margin: "50px" }} />
   </div>
 </div>
  )

}
