import { useEffect, useState } from 'react';
import Nav from '../../components/nav';
import classes from './home.module.css'
import Buttons from '../../components/Tabs/Buttons';
import Quotes from '../../components/Quotes/quotes';
import Vids from '../../components/Videos/vids';
import axios from 'axios';
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

   const fetchData = async() => {
    try{
    const res = await axios.get("http://3.211.182.247:3000/users/protected-route", {
       withCredentials: true
    });

      setData(res.data);
    }catch (err) {
        router.push('/');
    }
   }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data)

  return (
    <div> 
      <Nav/>
      <h1 className={classes.title}>WELCOME TO FOCUS-UP!</h1>
      <Buttons/>
      <Quotes/>
      <h1 className={classes.head}>Useful videos:</h1>
      <Vids/>
    </div>
  );
}
