import { useRouter } from "next/router"
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import Link from 'next/link';
import Text from "../../components/TextArea/text"
import classes from "./notes.module.css"
import { useState } from "react";



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
    const title = notes.map(title =>(
        title.title
    ))
    const [noteText,setNote] = useState("")
    const makeNote = async() =>{
        const res = await fetch(
            `http://localhost:3000/notes/update/${title}`,
           {
              method:'PATCH',
              Accept: "application/json",
              headers:{
               'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                note:noteText,
              })
           }
        )
        const data = await res.json();
    }
    return(
        <div>
            <Nav/>
            <Buttons/>
            {notes.map(note =>(
                <h1 key={note.id}>{note.title} Notes</h1>
            ))}

            <div className={classes.text}>
                <textarea rows="50" cols="80" placeholder="Enter details here..." onChange={(event) => setNote(event.target.value)}> 
                {
                    notes.map(note =>(
                        `${note.note}`
                    ))
                }
                </textarea>
                <button className={classes.save} onClick={async () => {makeNote({note:noteText})}}>Save</button>
    
            </div>
        </div>
    )
}