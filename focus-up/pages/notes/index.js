import Link from 'next/link';
import { useState } from 'react';
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import classes from "./notes.module.css"

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/notes")
  const data = await res.json()

  return{
    props: {notes: data}
  }
}

export default function Notes({notes}){
  const [titleText,setTitle] = useState('')
  const [titleChange,setChanged] = useState('')
  const [newTitle,setNew] = useState('')
  const addNote = async() =>{
    await fetch(
        `http://localhost:3000/notes/create`,
       {
          method:'POST',
          Accept: "application/json",
          headers:{
           'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            title:titleText,
          })
       }
    )
}

const changeTitle = async(titleChange) =>{
  await fetch(
     `http://localhost:3000/notes/update/title/${titleChange}`,
    {
       method:'PATCH',
       Accept: "application/json",
       headers:{
        'Content-Type': 'application/json',
       },
       body:JSON.stringify({
         title:newTitle,
       })
    }
 )
}
  return(
  <div>
    <Nav/>
    <Buttons/>
    {notes.map(note=> (
      <Link href={'/notes/' + note.title} key={note.id}>
      <a>
        <div>
        <button className={classes.noteTitle}>{note.title}</button>
        </div>
      </a>
      </Link>
    ))}
    <h1 className={classes.title}>
      CREATE NOTE
    </h1>
    <div>
      <form>
      <input type="text" className={classes.input}placeholder='Enter a new note title' value ={titleText} onChange={(e)=> setTitle(e.target.value)}/>
      <button className={classes.submit} onClick={async () => {addNote({title:titleText})}}>Add</button>
      </form>
    </div>
    <h1 className={classes.title}>
      UPDATE NOTE TITLE
    </h1>
    <div>
      <form>
      <input type="text"  className={classes.input} placeholder='Enter target title' value ={titleChange} onChange={(e)=> setChanged(e.target.value)}/>
      <input type="text"  className={classes.input} placeholder='Enter new title name' value ={newTitle} onChange={(e)=> setNew(e.target.value)}/>
      <button className={classes.submit} onClick={async () => {changeTitle(titleChange,{title:newTitle})}}>Change</button>
      </form>
    </div>
  </div>
    )
}