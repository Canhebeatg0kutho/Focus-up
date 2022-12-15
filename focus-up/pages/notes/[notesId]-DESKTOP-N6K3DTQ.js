import { useRouter } from "next/router"
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import classes from "../../components/Tabs/buttons.module.css"
import Link from 'next/link';


export default function NotesDetail(){
    const router =useRouter()
    const notesId=router.query.notesId
    return(
        <div>
        <Nav/>
        <h1>Notes for {notesId}</h1>
        <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        <button><Link href = '/topics'> Topics </Link></button>
        <button><Link href = '/calendar'>Notes</Link></button>
        </div>
        </div>
    )
}