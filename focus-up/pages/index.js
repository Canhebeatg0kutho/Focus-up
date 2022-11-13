import Nav from '../components/nav';
import classes from '../styles/Home.module.css'
import Link from 'next/link';
import Icon from '../components/Calendar/CalIcon';

export default function Home() {
  return (
    
  <div> 
  <Nav/>
    <h1 className={classes.title}>WELCOME TO FOCUS-UP!</h1>
    <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        <button><Link href = '/topics'> Topics </Link></button>
        <button><Link href = '/calendar'>Notes</Link></button>
    </div>
     </div>

    

  )
}
