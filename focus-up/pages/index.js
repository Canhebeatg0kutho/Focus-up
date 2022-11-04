import Nav from '../components/nav';
import classes from '../styles/Home.module.css'
import Link from 'next/link';
import { Fragment } from 'react'

export default function Home() {
  return (
    
  <div> 
  <Nav/>
    <div className={classes.buttons}>
        <button><Link href = '/tasks'> Tasks </Link></button>
        <button><Link href = '/timer'> Timer </Link></button>
        <button><Link href = '/topics'> Topics </Link></button>
        <button>Notes</button>
    </div>

    
  </div>
  )
}
