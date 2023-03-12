import Link from 'next/link';
import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import Text from "../../components/TextArea/text"

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/users")
  const data = await res.json()

  return{
    props: {users: data}
  }
}

export default function Notes({users}){
    return(
  <div>
    <Nav/>
    <Buttons/>

    {users.map(user=> (
      <Link href={'/notes/' + user.username} key={user.id}>
      <a>
        <h3>{user.username}</h3>
      </a>
      </Link>
    ))}
  </div>
    )
}