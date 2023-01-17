import classes from "./buttons.module.css"
import Popup from "./popup"
import { useState } from "react"
import Form from "./form"
export default function Signup(){
    const [isOpen,setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
           {isOpen && <Popup
            handleClose={togglePopup}
            content={<Form/>}
            />} 
            <button className={classes.signup} onClick={togglePopup}>
                Sign Up
            </button>

            <button className={classes.signup} onClick={togglePopup}>
                Login
            </button>

        </div>
    )
}