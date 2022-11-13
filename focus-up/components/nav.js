import classes from '../styles/Home.module.css'
import Icon from './Calendar/CalIcon'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Nav(){
  const router = useRouter();

  function calendar(props) {
    router.push('/calendar' + props.id);
  }
    return(
    <div>
    <nav className={classes.nav}>
    <Icon />
    <h1 className={classes.navtitle}><Link href = '/'>FOCUS UP</Link></h1>
    </nav>
    </div>
    )
}