import Link from "next/link"
import classes from "./buttons.module.css"
export default function Form(){
    return(
        <div className={classes.container}>
            <p className={classes.email}>Enter email *</p>
            <input className={classes.input} type="text" placeholder="Enter email..." required/>
            <p className={classes.email}>Enter password *</p>
            <input className={classes.input} type="text" placeholder="Enter Password..." required/>
            <button className={classes.submit}><Link href = '/home'>Submit</Link></button>
        </div>
    )
}