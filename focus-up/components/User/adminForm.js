import classes from "./buttons.module.css"
import { useState,useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
export default function Form(){
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setLogin] = useState(false)
    const router = useRouter()

const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
        method: "post",
        url:"http://3.211.182.247:3000/admin/login",
        data:{
            username,
            password,
        }
    }
    axios(configuration)
    .then((result) => {setLogin(true);})
    .catch((error) => {error = new Error();})
}

useEffect(() => {
    if (isLogin) {
        router.push('/admin');
    }
}, [isLogin])



    return(
        <div className={classes.container}>
            <form onSubmit={handleSubmit}  >
            <h3 className={classes.email}>Enter username *</h3>
            <input className={classes.input} type="text" value={username} placeholder="Enter username..." onChange={(e) => setUser(e.target.value)} required />
            <h3 className={classes.email}>Enter password *</h3>
            <input className={classes.input} type="password" value={password} placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} required/>
            <button onClick={handleSubmit} className={classes.submit}>Submit</button>
            { isLogin ? <p>Redirecting...</p> : (<p className={classes.failure}>This user does not exist</p> )}
            </form>
        </div>
    )
}


