import classes from "./themes.module.css"



export default function themes(){

    return(
     <div className={classes.options}>
        <div id = 'white'/>
        <div id = 'blue'/>
        <div id = 'green'/>
        <div id = 'red'/>
        <div id = 'yellow'/>
     </div>



    )
}