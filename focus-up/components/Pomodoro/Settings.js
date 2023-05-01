import { useState } from "react"
import classes from "./pomo.module.css"



export default function Settings(){
    const[title,setTitle] = useState("Work")
    const[newSeconds,setSeconds]= useState('')
    const[newMinutes,setMinutes]= useState('')
    const[currentState,changeState]= useState(true)
  

    const editTimer = async() => {
     await fetch("http://3.211.182.247:3000/timer/edit", {
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
    currentState ? setTitle("Work") : setTitle("Break")
    changeState(!currentState)
}
    return(
        <div>
          <p className={classes.settingsTitle}>settinngs for {title}</p>
          <button onClick={() => handleClick()}> Change settings</button>
         <form className={classes.form}>
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