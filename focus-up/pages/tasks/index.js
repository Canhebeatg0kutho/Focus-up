import classes from './tasks.module.css'
import Link from 'next/link';

export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
    <h1 className={classes.navtitle}>FOCUS DOWN</h1>
  </nav>

  <div class={classes.buttons}>
      <button>Tasks</button>
      <button><Link href = '/timer'> Timer </Link></button>
      <button><Link href = '/topics'> Topics </Link></button>
      <button>Notes</button>
      </div>
  </div>
  )
}
