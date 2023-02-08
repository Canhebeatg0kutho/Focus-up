import classes from "./buttons.module.css"
import { useState, useEffect } from "react"
import {Routes,Route,useNavigate} from "react-router-dom"
import axios from "axios"
import Link from 'next/link';

import Home from "../../pages/home/index"
export default function Form(){
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isRegister, setRegister] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
        method: "post",
        url:"http://localhost:3000/users/register",
        data:{
            username,
            password,
        }
    }
    axios(configuration)
    .then((result) => {setRegister(true);})
    .catch((error) => {error = new Error();})
}



    return(
        <div className={classes.container}>
            <form onSubmit={handleSubmit}  >
            <h3 className={classes.email}>Enter username *</h3>
            <input className={classes.input} type="text" value={username} placeholder="Enter username..." onChange={(e) => setUser(e.target.value)} required />
            <h3 className={classes.email}>Enter password *</h3>
            <input className={classes.input} type="password" value={password} placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} required/>
            <button onClick={handleSubmit} className={classes.submit}>Submit</button>
            { isRegister ? ( <p className={classes.success}>You Are Registered Successfully</p>  )  : (<p className={classes.failure}>You Are Not Registered</p> )}
            </form>
        </div>
    )
}