import classes from "./buttons.module.css"
import Popup from "./popup"
import { useState } from "react"
import Register from "./registerForm"
export default function Signup(){
    const [isOpen,setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
           {isOpen && <Popup handleClose={togglePopup} content={<Register/>} />} 
            <button className={classes.signup} onClick={togglePopup}>
                Sign Up
            </button>
        </div>
    )
}