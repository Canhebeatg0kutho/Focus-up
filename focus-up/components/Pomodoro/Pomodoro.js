import classes from "./pomo.module.css"
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { useState, useEffect, useRef } from "react"
export default function Pomodoro(){
 
    const[minutes,setMinutes] = useState(0);
    const[seconds,setSeconds] = useState(5);
    const[displayMessage,setDisplayMessage]= useState(false);
    const[isPaused,setPause] = useState(true);

    const isPausedRef = useRef(isPaused);


    useEffect(() => {
        
        let interval = setInterval(()=>{
            clearInterval(interval);
           if(isPausedRef.current === false){
            if(seconds === 0 ){
                if(minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else{
                  let minutes = displayMessage ? 24 : 4
                  let seconds = 59;

                  setSeconds(seconds);
                  setMinutes(minutes);
                  setDisplayMessage(!displayMessage);
                }
            } else{
                setSeconds(seconds - 1);
            }
           }
        }, 1000)
    }, [seconds]);
    
    const timerMinutes = minutes <10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return(
        <div className={classes.pomodoro}> 
           <div className={classes.message}>
             {displayMessage && <div> Break time! New Session starts in:</div>}
           </div>
        <div className={classes.timer}>{timerMinutes}:{timerSeconds}</div>
        <div> 
            {isPaused 
            ? <PlayButton onClick={()=>{setPause(false); isPausedRef.current = false;}}/> 
            : <PauseButton onClick={()=>{setPause(true); isPausedRef.current = true;}}/>}
        </div>
      
        
        
        </div>
    )
}