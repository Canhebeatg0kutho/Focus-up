import Link from "next/link"
import classes from "./buttons.module.css"
export default function Form(){
    return(
        <div>
            <input className={classes.input} type="text" placeholder="Enter email..."/>
            <input className={classes.input} type="text" placeholder="Enter Password..."/>
            <button className={classes.submit}><Link href = '/home'>Submit</Link></button>
        </div>
    )
}