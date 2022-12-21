import classes from "./buttons.module.css"
import Link from 'next/link';
import notesSpec from "../../pages/notes/[notesId]"


export default function Buttons(){
    return(
        <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        {/* <button><Link href = '/topics'> Topics </Link></button>
        <button><Link href = '/notes/rtos'>Notes</Link></button> */}
    </div>
    )
}