import classes from "./buttons.module.css"
import { useState } from "react"
import axios from "axios"
export default function Form(){
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setLogin] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
        method: "post",
        url:"http://localhost:3000/users/login",
        data:{
            username,
            password,
        }
    }
    axios(configuration)
    .then((result) => {setLogin(true);})
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
            { isLogin ? ( <p className={classes.success}>You have Logged in Successfully</p>  ) : (<p className={classes.failure}>This user does not exist</p> )}
            </form>
        </div>
    )
}


