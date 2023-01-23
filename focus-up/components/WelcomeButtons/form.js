import Link from "next/link"
import classes from "./buttons.module.css"
export default function Form(){
    return(
        <div className={classes.container}>
            <h3 className={classes.email}>Enter email *</h3>
            <input className={classes.input} type="text" placeholder="Enter email..." required />
            <h3 className={classes.email}>Enter password *</h3>
            <input className={classes.input} type="text" placeholder="Enter Password..." required/>
            <button className={classes.submit}><Link href = '/home'>Submit</Link></button>
        </div>
    )
}