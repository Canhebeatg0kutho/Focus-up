
import classes from '../styles/Home.module.css'
import Link from 'next/link';
import { Fragment } from 'react'

export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
    <h1 className={classes.navtitle}>FOCUS UP</h1>
  </nav>
  <div class={classes.buttons}>
      <button><Link href = '/tasks'> 
          Tasks
          </Link></button>
      <button>Timer</button>
      <button>Topics</button>
      <button>Notes</button>
      </div>
  </div>
  )
}
