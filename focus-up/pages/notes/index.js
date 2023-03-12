import Link from 'next/link';
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
  </div>
    )
}