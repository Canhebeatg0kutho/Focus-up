import Link from 'next/link';
import { useState } from 'react';
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import Text from "../../components/TextArea/text"

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/notes")
  const data = await res.json()

  return{
    props: {notes: data}
  }
}

export default function Notes({notes}){
  const [titleText,setTitle] = useState('')
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
  return(
  <div>
    <Nav/>
    <Buttons/>
    {notes.map(note=> (
      <Link href={'/notes/' + note.title} key={note.id}>
      <a>
        <h3>{note.title}</h3>
      </a>
      </Link>
    ))}
    <div>
      <form>
      <input type="text" placeholder='Enter a new note title' value ={titleText} onChange={(e)=> setTitle(e.target.value)}/>
      <button onClick={async () => {addNote({title:titleText})}}>Save</button>
      </form>
    </div>
  </div>
    )
}