import classes from "../styles/Home.module.css"
const pic = new URL("../images/study.jpeg",import.meta.url)

export default function Welcome(){
    return(
        <div>
            <div className={classes.container}>
            <div className={classes.imagecontainer}>
            <img className={classes.image} src={pic}></img>
            </div>
            <div className={classes.words}>
            <h1 className={classes.title}>FOCUS UP</h1>
            </div>
            </div>
        </div>
    )
}