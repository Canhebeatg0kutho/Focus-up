import Link from "next/link"
import classes from "./buttons.module.css"
export default function Form(){
    return(
        <div className={classes.container}>
            <input className={classes.input} type="text" placeholder="Enter email..." required/>
            <input className={classes.input} type="text" placeholder="Enter Password..." required/>
            <button className={classes.submit}><Link href = '/home'>Submit</Link></button>
        </div>
    )
}