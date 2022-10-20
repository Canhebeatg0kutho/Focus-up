import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import classes from '../styles/Home.module.css'

export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
    <h1 className={classes.navtitle}>FOCUS UP</h1>
  </nav>

  <nav>
      <ul className= {classes.ul}>
      <li className = {classes.li}>Tasks</li>
      <li className = {classes.li}>Timer</li>
      <li className = {classes.li}>Topics</li>
      <li className = {classes.li}>Notes</li>
    </ul>
  </nav>
  </div>
  )
}
