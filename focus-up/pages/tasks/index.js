import classes from './tasks.module.css'
import App from '../../components/todo/App';
import Nav from '../../components/nav';
import Buttons from '../../components/Tabs/Buttons';


export default function Home() {
  return (
  //  <Nav className = {classes.nav}/>
  <div> 
  <Nav/>
  <Buttons/>
  <App/>
  </div>
  )
}
