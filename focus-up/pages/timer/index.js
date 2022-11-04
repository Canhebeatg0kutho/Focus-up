
import classes from './timer.module.css'
import Link from 'next/link';
import { Fragment } from 'react'
import Time from '../../components/Timer/Time';

export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
  <h1 className={classes.navtitle}><Link href = '/'>FOCUS LEFT</Link></h1>
  </nav>
  <div class={classes.buttons}>
      <button><Link href = '/tasks'> Tasks </Link></button>
      <button>Timer</button>
      <button><Link href = '/topics'> Topics </Link></button>
      <button>Notes</button>
      </div>
     <Time countdownTimestampMs={543210}/>
  </div>
  )
}
