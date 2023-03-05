import classes from "./text.module.css"

export default function Text(){
    return(
        <div className={classes.text}>
        <textarea rows = "50" cols = "80" placeholder="Enter details here..."> </textarea>
        </div>
    )
}