import classes from "./buttons.module.css"
import Popup from "./popup"
import { useState } from "react"
import AdminForm from "./adminForm"
export default function Login(){
    const [isOpen,setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
           {isOpen && <Popup handleClose={togglePopup} content={<AdminForm/>} />} 
            <button className={classes.signup} onClick={togglePopup}>
                Login
            </button>
        </div>
    )
}