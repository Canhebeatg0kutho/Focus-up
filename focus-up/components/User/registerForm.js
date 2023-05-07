import classes from "./buttons.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"

export default function Form(){
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isRegister, setRegister] = useState(false)
    const router = useRouter()

    const refresh = () => {
        window.location.reload(true)
      }
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

useEffect(() => {
    if (isRegister) {
        refresh()
    }
}, [isRegister])

    return(
        <div className={classes.container}>
            <form onSubmit={handleSubmit}  >
            <h3 className={classes.username}>Enter username *</h3>
            <input className={classes.input} type="text" value={username} placeholder="Enter username..." onChange={(e) => setUser(e.target.value)} required />
            <h3 className={classes.username}>Enter password *</h3>
            <input className={classes.input} type="password" value={password} placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} required/>
            <button onClick={handleSubmit} className={classes.submit}>Submit</button>
            { isRegister ?  <p>Redirecting...</p> : (<p className={classes.failure}>You Are Not Registered</p> )}
            </form>
        </div>
    )
}