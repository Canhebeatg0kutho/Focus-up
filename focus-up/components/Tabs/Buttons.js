import classes from "./buttons.module.css"
import Link from 'next/link';
import notesSpec from "../../pages/notes/[username]"


export default function Buttons(){
    return(
        <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        <button><Link href = '/notes'>Notes</Link></button>
    </div>
    )
}