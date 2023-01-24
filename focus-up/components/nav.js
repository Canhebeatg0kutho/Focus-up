import classes from './nav.module.css'
import Icon from './Calendar/CalIcon'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Logout from './Logout/logout';

export default function Nav(){
  const router = useRouter();

  function calendar(props) {
    router.push('/calendar' + props.id);
  }
    return(
    <div>
    <nav className={classes.nav}>
    <Icon />
    <h1 className={classes.navtitle}><Link href = '/home'>FOCUS UP</Link></h1>
    <Logout/>
    </nav>
    </div>
    )
}