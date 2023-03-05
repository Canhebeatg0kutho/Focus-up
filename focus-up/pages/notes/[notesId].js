import { useRouter } from "next/router"
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import classes from "../../components/Tabs/buttons.module.css"
import Link from 'next/link';

export const getStaticPaths = async () =>{
    const res = await fetch("http://localhost:3000/users")
    const data = await res.json()

    const paths = data.map(user=>{
        return {
            params: {username: user.username.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

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
        <button><Link href = '/notes'>Notes</Link></button>
        </div>
        </div>
    )
}