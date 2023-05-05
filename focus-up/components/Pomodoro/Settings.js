import { useState } from "react"
import classes from "./pomo.module.css"



export default function Settings(){
    const[title,setTitle] = useState("Work")
    const[newSeconds,setSeconds]= useState('')
    const[newMinutes,setMinutes]= useState('')
    const[currentState,changeState]= useState(true)
  

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

const handleClick = () =>{
  changeState(!currentState)
    currentState ? setTitle("Work") : setTitle("Break")

}
    return(
        <div>
         <div className={classes.form}>
         <p className={classes.settingsTitle}>Settings for {title}</p>
         <button className={classes.change} onClick={() => handleClick()}> Change settings</button>
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
           <button className={classes.submit} onClick={async () => {
              editTimer( { title: title, minutes:newMinutes,seconds:newSeconds });
            }}
          >Submit</button>
         </div>

        </div>
    )
}