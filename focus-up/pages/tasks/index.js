import classes from './tasks.module.css'
import Tasks from '../../components/todo/App';
import Nav from '../../components/nav';
import Buttons from '../../components/Tabs/Buttons';


export default function Home() {
  return (
  <div> 
  <Nav/>
  <Buttons/>
  <div className={classes.container}>
    <div className={classes.todo}> 
    <Tasks/>
    </div>
  </div>
  </div>
  
  )
}
