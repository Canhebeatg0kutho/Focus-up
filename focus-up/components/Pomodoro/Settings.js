import { useState } from "react"
import classes from "./pomo.module.css"



export default function Settings(){
    const[title,setTitle] = useState('')
    const[newSeconds,setSeconds]= useState('')
    const[newMinutes,setMinutes]= useState('')

    const editTimer = async() => {
     await fetch("http://localhost:3000/timer/edit", {
      method: "PATCH",
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:title,
        minutes: newMinutes,
        seconds: newSeconds
      }),
    });
}
    return(
        <div>
         <form className={classes.form}>
         <input
            type="text"
            className={classes.input}
            placeholder="Enter  title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className={classes.input}
            placeholder="Enter new minutes"
            value={newMinutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <input
            type="text"
            className={classes.input}
            placeholder="Enter new seconds"
            value={newSeconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
         </form>
         <button className={classes.submit} onClick={async () => {
              editTimer( { title: title, minutes:newMinutes,seconds:newSeconds });
            }}
          >Submit</button>
        </div>
    )
}