import classes from "../styles/Home.module.css"
import Logo from "../components/Logo/logo"
import LogoSmall from "../components/LogoSmall/logo"
import Signup from "../components/User/signup"
import Login from "../components/User/login"
import Admin from "../components/User/admin"
const pic = new URL("../images/study.jpeg",import.meta.url)

export default function Welcome(){
    
    return(
        <div>
            <div className={classes.container}>
           
            </div>
            <div className={classes.logo}>
                <div className={classes.inLogo}>
                <h1>FOCUS UP</h1>
                <Logo/>
                </div>
            </div>
            <div className = {classes.words}>
            <h1 className={classes.phrase}>Get stuck in</h1>
            </div>
            <div className={classes.signupcontainer}>
            <div className={classes.signup}>
            <Signup/>
            <Login/>
            </div>
            </div>

        </div>
    )
}