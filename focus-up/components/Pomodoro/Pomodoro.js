import classes from "./pomo.module.css"
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButtton";
import { useState, useEffect, useRef } from "react"
export default function Pomodoro(){
    const[minutes,setMinutes] = useState(0);
    const[seconds,setSeconds] = useState(5);
    const[status,setStatus]= useState("Work")
    const[displayMessage,setDisplayMessage]= useState(false);
    const[isPaused,setPause] = useState(true);


    const fetchTimer = async (status) => {
      const response = await fetch(`http://localhost:3000/timer/${status}`);
      const data = await response.json();
      setMinutes(data.minutes); // Set minutes from the response
      setSeconds(data.seconds); // Set seconds from the response
    };
    
    useEffect(() => {
      fetchTimer(status); // Call fetchTimer with status parameter
    }, [status]);
  
    let interval= null;
    //Anytime seconds is updated/ if the play button is pressed, run this code
    useEffect(() => {   
        if(isPaused === false){
          interval = setInterval(()=>{
            clearInterval(interval);
            if(seconds === 0 ){
                if(minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } 
                //If minutes is 0 that means timer has ended, enter next state
                else{
                  
                 fetchTimer(status)
                  displayMessage ? (setStatus("Work"), alert("Break has ended")):(setStatus("Break"), alert("Time for a break"))
                   setPause(true);
                  //Opposite of current displayMessage
                  setDisplayMessage(!displayMessage);
                }
            } else{
                setSeconds(seconds - 1);
            }
        }, 1000)
    }
    else{
     clearInterval(interval);
    }
    }, [seconds,isPaused]);

    //Display formatting
    const timerMinutes = minutes <10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;


    return(
        <div className={classes.pomodoro}> 
           <div className={classes.message}>
            {/* If displaymessage is true show message, if false, dont */}
             {displayMessage ? "Break time! New Session starts in:" : "Get back to work "}
           </div>
        <div className={classes.timer}>{timerMinutes}:{timerSeconds}</div>
        <div className={classes.buttonsContainer}> 
            {isPaused 
            ? <PlayButton onClick={()=>{setPause(false); }}/> 
            : <PauseButton onClick={()=>{setPause(true); }}/>}
            <SettingsButton/>
        </div>   
        </div>
    )
}