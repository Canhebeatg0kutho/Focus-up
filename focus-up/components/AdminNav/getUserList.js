import classes from "./buttons.module.css"
import { useState,useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
export default function List(){

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
            <button onClick={handleSubmit} className={classes.submit}>GET</button>
        </div>
    )
}


