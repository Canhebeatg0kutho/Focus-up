import classes from "../styles/Home.module.css"
import Logo from "../components/Logo/logo"
import Signup from "../components/WelcomeButtons/signup"
import "reactjs-popup/dist/index.css"
const pic = new URL("../images/study.jpeg",import.meta.url)

export default function Welcome(){
    
    return(
        <div>
            <div className={classes.container}>
            <div className={classes.imagecontainer}>
            <img className={classes.image} src={pic}></img>
            </div>
            <div className={classes.words}>
            <Logo/>
            <h1 className={classes.phrase}>Get stuck in</h1>
            <h1 className={classes.para}>Join FOCUS-UP today</h1>
            <div className={classes.signup}>
            <Signup/>
            </div>

            </div>
            </div>
        </div>
    )
}