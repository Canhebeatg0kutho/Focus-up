
import classes from './timer.module.css'
import Link from 'next/link';
import { Fragment } from 'react'
import Pomodoro from '../../components/Pomodoro/Pomodoro';
import PlayButton from '../../components/Pomodoro/PlayButton';
import PauseButton from '../../components/Pomodoro/PauseButton';
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
      <Pomodoro />

  </div>
  )
}
