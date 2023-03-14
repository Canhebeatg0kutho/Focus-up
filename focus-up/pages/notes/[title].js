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
      props: {notes: data}
    }
  }

//   const setNote = async() =>{
//     const data = awaitfetch(
//        "http://localhost:3000/notes/update",
//        {
//           method:'PATCH',
//           headers:{
//            'Content-Type': 'application/json',
//           },
//           body:JSON.stringify({
           
//           })
//        }
//     )
// }

export default function NotesDetail({notes}){
    return(
        <div>
        <Nav/>
        <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        <button><Link href = '/notes'> Notes</Link></button>
        {notes.map(note =>(
            <h1 key={note.id}>{note.title} Notes</h1>
        ))}
        </div>
        <div className={classes.text}>
        <textarea rows = "50" cols = "80" placeholder="Enter details here..."> </textarea>
        </div>
        <Text/>
        </div>
    )
}