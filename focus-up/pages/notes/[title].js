import { useRouter } from "next/router"
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import classes from "../../components/Tabs/buttons.module.css"
import Link from 'next/link';
import Text from "../../components/TextArea/text"


export const getStaticPaths = async () =>{
    const res = await fetch("http://localhost:3000/notes")
    const data = await res.json()
     
    const paths = data.map(note=>{
        return {
            params: {title: note.title.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
const title = context.params.title
const res = await fetch("http://localhost:3000/notes/" + title)
const data = await res.json()
console.log(data)
    return{
      props: {title: data}
    }
  }

export default function NotesDetail({users}){
    // const router =useRouter()
    // const notesId=router.query.notesId
    return(
        <div>
        <Nav/>
        {/* <h1>{users.username}</h1> */}
        {/* <h1>Notes for {notesId}</h1> */}
        <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        <button><Link href = '/notes'>Notes</Link></button>
        </div>
        <Text/>
        </div>
    )
}