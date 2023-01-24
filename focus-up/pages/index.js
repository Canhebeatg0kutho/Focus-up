import classes from "../styles/Home.module.css"
import Logo from "../components/Logo/logo"
import LogoSmall from "../components/LogoSmall/logo"
import Signup from "../components/WelcomeButtons/signup"
const pic = new URL("../images/study.jpeg",import.meta.url)

export default function Welcome(){
    
    return(
        <div>
            <div className={classes.container}>
            <div className={classes.imagecontainer}>
            <img className={classes.image} src={pic}></img>
            </div>
            <div className={classes.words}>
            <LogoSmall/>
            <h1 className={classes.phrase}>Get stuck in</h1>
            <h1 className={classes.para}>Join FOCUS-UP today</h1>
            <div className={classes.signup}>
            <Signup/>
            </div>
            </div>
            </div>
            <div className={classes.logo}>
                <div className={classes.inLogo}>
                <h1>FOCUS UP</h1>
                <Logo/>
                </div>
            </div>
        </div>
    )
}