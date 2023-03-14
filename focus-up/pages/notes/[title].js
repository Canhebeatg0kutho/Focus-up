import { useRouter } from "next/router"
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import Link from 'next/link';
import Text from "../../components/TextArea/text"
import classes from "./notes.module.css"



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
      props: {notes: data}
    }
  }



export default function NotesDetail({notes}){
    return(
        <div>
        <Nav/>
        <Buttons/>
        {notes.map(note =>(
            <h1 key={note.id}>{note.title} Notes</h1>
        ))}

        <div className={classes.text}>
        <textarea rows = "50" cols = "80" placeholder="Enter details here..."> 
        {
            notes.map(note =>(
                `${note.note}`
            ))
        }
        </textarea>
        </div>
        </div>
    )
}