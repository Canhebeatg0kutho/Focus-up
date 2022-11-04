import classes from './tasks.module.css'
import Link from 'next/link';
import ListState from '../../components/tasks/ListState';


export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
    <h1 className={classes.navtitle}><Link href = '/'>FOCUS DOWN</Link></h1>
  </nav>

  <div class={classes.buttons}>
      <button>Tasks</button>
      <button><Link href = '/timer'> Timer </Link></button>
      <button><Link href = '/topics'> Topics </Link></button>
      <button>Notes</button>
  </div>
     <ListState/>
  </div>
  )
}
