import { useState } from "react"
import Calendar from "react-calendar"
import Nav from "../../components/nav"
export default function Home(){
    const [date, setDate] = useState(new Date())

return (
 <div className="app">
   <Nav/>
   <h1 className="header">React Calendar</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}
