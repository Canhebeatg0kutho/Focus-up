import classes from "./pomo.module.css"
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { useState, useEffect, useRef } from "react"
export default function Pomodoro(){
 
    const[minutes,setMinutes] = useState(0);
    const[seconds,setSeconds] = useState(5);
    const[displayMessage,setDisplayMessage]= useState(false);
    const[isPaused,setPause] = useState(true);

    //const isPausedRef = useRef(isPaused);
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
                  //if display message is true, minutes is 24 if false, 4 
                  let min = displayMessage ? 24 : 4
                  let sec = 59;
                  setPause(true);
                 // isPausedRef.current = true;

                  setSeconds(sec);
                  setMinutes(min);
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
   // console.log(isPausedRef);


    return(
        <div className={classes.pomodoro}> 
           <div className={classes.message}>
            {/* If displaymessage is true show message, if false, dont */}
             {displayMessage ? "Break time! New Session starts in:" : ""}
           </div>
        <div className={classes.timer}>{timerMinutes}:{timerSeconds}</div>
        <div> 
            {isPaused 
            ? <PlayButton onClick={()=>{setPause(false); /*isPausedRef.current = false;*/}}/> 
            : <PauseButton onClick={()=>{setPause(true); /*isPausedRef.current = true;*/}}/>}
        </div>   
        </div>
    )
}