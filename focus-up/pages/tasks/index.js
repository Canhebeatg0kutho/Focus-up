import classes from './tasks.module.css'
export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <nav className={classes.nav}>
    <h1 className={classes.navtitle}>FOCUS DOWN</h1>
  </nav>

  <div class={classes.buttons}>
      <button>Tasks</button>
      <button>Timer</button>
      <button>Topics</button>
      <button>Notes</button>
      </div>
  </div>
  )
}
