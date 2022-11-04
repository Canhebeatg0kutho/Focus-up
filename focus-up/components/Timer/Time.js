import classes from "./timing.module.css"
import { useState, useEffect } from "react"
import {getRemainingTimeUntilMsTimeStamp} from "./Utils/TimerUtils"
export default function Time({countdownTimestampMs}){
    const defaultStartTime ={
        seconds : '00',
        minutes : '00',
        hours : '00',
    }

   
    const[startTime,setTime] = useState(defaultStartTime);
    useEffect(()=>{
       const intervalId =  setInterval(()=>{
        updateTime(countdownTimestampMs);
        },1000);
        return () => clearInterval(intervalId);

    },[countdownTimestampMs])

    function updateTime(countdown){
        setTime(getRemainingTimeUntilMsTimeStamp(countdown));
    }

    return(
        <div>
        <span>{startTime.hours}</span>
        <span>:</span>
        <span>{startTime.minutes}</span>
        <span>:</span>
        <span>{startTime.seconds}</span>
        </div>
            
    )
    
}