import { useState } from "react"
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
import Nav from "../../components/nav"

//Where you want to refer your calendar to
const locales = {
  "en-GB": require("date-fns/locale/en-GB")
}

//Localizes aspects of the calendar to the specific region
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

//Pre-Made array
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
   //Holds an array with 3 parameters, seperate from existinng events
    const [newEvent,setNewEvent] = useState({title:"", start:"", end: ""})
    //Holds all array ojects
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
    {/* Sets title variable to inputted value */}
    <input type="text" placeholder="Add Title" className={classes.input} value={newEvent.title} onChange={(add) => setNewEvent({...newEvent,title: add.target.value})}/> 
    {/* Sets start parameter to selected value */}
    <DatePicker placeholderText="Start Date"   className={classes.start} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
    {/* Sets end parameter to selected value */}
    <DatePicker placeholderText="End Date"     className={classes.end}  selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />   
    {/* When button is pressed, all changes take effect */}
    <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>Add Event</button>
    </div>


   <div className={classes.cal}>
    {/* Contains event array, */}
   <Calendar localizer={localizer}
    events={allEvents}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500, margin: "50px" }}
     />
   </div>
 </div>
  )

}
