import Nav from '../../components/nav';
import classes from './home.module.css'
import Buttons from '../../components/Tabs/Buttons';

export default function Home() {
  return (
  <div> 
  <Nav/>
  <h1 className={classes.title}>WELCOME TO FOCUS-UP!</h1>
  <Buttons/>
  <div className={classes.quotes}>
  <h1 className={classes.text}>“Learning is the only thing the mind never exhausts, never fears, and never regrets.” – Leonardo da Vinci.</h1>
  <h1 className={classes.text}>“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill</h1>
  <h1 className={classes.text}>“Failure is the opportunity to begin again more intelligently.” – Henry Ford</h1>
  <h1 className={classes.text}>“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale</h1>
  </div>
  </div>
  )
}
