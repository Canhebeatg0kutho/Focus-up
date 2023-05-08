import classes from './nav.module.css'
import Link from 'next/link';
import Logout from './Logout/logout';

export default function Nav(){


    return(
    <div>
    <nav className={classes.nav}>
   {/* <Icon /> */}
    <h1 className={classes.navtitle}><Link href = '/home'>FOCUS UP</Link></h1>
    <Logout/>
    </nav>
    </div>
    )
}