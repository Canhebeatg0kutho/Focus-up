import classes from "./buttons.module.css"
import Popup from "./popup"
import { useState } from "react"
import LoginForm from "./loginForm"
export default function Login(){
    const [isOpen,setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
           {isOpen && <Popup handleClose={togglePopup} content={<LoginForm/>} />} 
            <button className={classes.signup} onClick={togglePopup}>
                Login
            </button>
        </div>
    )
}