
import classes from './topics.module.css'
import Link from 'next/link';
import { Fragment } from 'react'

export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
  <h1 className={classes.navtitle}><Link href = '/'>FOCUS RIGHT</Link></h1>
  </nav>
  <div class={classes.buttons}>
      <button><Link href = '/tasks'> Tasks </Link></button>
      <button><Link href = '/timer'> Timer </Link></button>
      <button>Topics</button>
      <button>Notes</button>
      </div>
  </div>
  )
}
