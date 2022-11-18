import Nav from "../../components/nav"
import Buttons from "../../components/Tabs/Buttons"
import classes from "./buttons.module.css"


export default function Notes(){
    return(
        
  <div class={classes.buttons}>
  <button>Tasks</button>
  <button>Timer</button>
  <button>Topics</button>
  <button>Notes</button>
  </div>
    )
}