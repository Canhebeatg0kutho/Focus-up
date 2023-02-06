import Link from "next/link"
import classes from "./buttons.module.css"
import Home from "../../pages/home/index"
import{BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from "react"
export default function Form(){
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setLogin] = useState(false)


    return(
        <div className={classes.container}>
            <h3 className={classes.email}>Enter username *</h3>
            <input className={classes.input} type="text" value={username} placeholder="Enter username..." onChange={(e) => setUser(e.target.value)} required />
            <h3 className={classes.email}>Enter password *</h3>
            <input className={classes.input} type="password" value={password} placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} required/>
            <button className={classes.submit}><Link href = '/home'>Submit</Link></button>

        </div>
    )
}