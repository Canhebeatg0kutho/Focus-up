import Nav from '../../components/nav';
import classes from './home.module.css'
import Buttons from '../../components/Tabs/Buttons';
import Quotes from '../../components/Quotes/quotes';
import Vids from '../../components/Videos/vids';


export default function Home() {
  return (
  <div> 
  <Nav/>
  <h1 className={classes.title}>WELCOME TO FOCUS-UP!</h1>
  <Buttons/>
  <Quotes/>
  <h1 className={classes.head}>Useful videos:</h1>
  <Vids/>
  </div>
  )
}
