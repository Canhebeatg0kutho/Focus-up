import Nav from '../../components/nav';
import classes from './home.module.css'
import Buttons from '../../components/Tabs/Buttons';
import Quotes from '../../components/Quotes/quotes';

export default function Home() {
  return (
  <div> 
  <Nav/>
  <h1 className={classes.title}>WELCOME TO FOCUS-UP!</h1>
  <Buttons/>
  <Quotes/>
  </div>
  )
}
