import classes from "./buttons.module.css"
import { useState,useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { isAuth } from "../../backend/passport/auth"
import Cookies from "js-cookie"
export default function Form(){
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setLogin] = useState(false)
    const router = useRouter()
    const sid = Cookies.get('session') || ''

    const handleSubmit = async(e) => {
        e.preventDefault();
       const result = await axios.post("http://localhost:3000/users/login", {
          username,
          password,
        }, {
          withCredentials: true,
        })
        try{
          if(sid){
            setLogin(true);   
          }
          console.log(result.data)
          console.log(sid)
        }catch(error){
          console.log(error)
        }
      }
useEffect(() => {
    if (isLogin) {
        router.push('/home');
        console.log(isLogin)
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
            { isLogin ? <p className={classes.failure}>Redirecting...</p> : (<p className={classes.failure}>This user does not exist</p> )}
            </form>
        </div>
    )
}


