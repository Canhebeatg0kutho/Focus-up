import { useState,useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import classes from "./adminNav.module.css"

export default function List(){
    const [users,setuser] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
        method: "get",
        url:"http://3.211.182.247/users"
    }
    axios(configuration)
    .then((result) => {setuser(result.data)})
    .catch((error) => {error = new Error();})
}
    return(
        <div >
            <button onClick={handleSubmit}>GET</button>
            {users.length > 0 && (
                <ul>
                    {users.map((user)=>(
                        <li className={classes.list} key={user.id}>{user.username}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}


