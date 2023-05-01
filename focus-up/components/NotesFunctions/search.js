import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Buttons from "../../components/Tabs/Buttons";
import classes from "../../pages/notes/notes.module.css";

export default function search() {
  const [titles, setTitle] = useState([]);
  const [text, setText] = useState('');

  const search = async () => {
  
    console.log(text);
    try {
      const res = await fetch(`http://3.211.182.247:3000/notes/find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: text,
        }),
      });
      const data = await res.json();
      console.log(data);
      setTitle(data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(()=>{
    console.log(titles)
  },[titles])

  return (
    <div>
     
      {titles.map((title) => (
        <Link href={"/notes/" + title.title} key={title._id}>
          <a>
            <div>
            <p>Results:</p>
              <button className={classes.noteTitle}>{title.title}</button>
            </div>
          </a>
        </Link>
      ))}

      {/* FIND NOTE */}
      <h1 className={classes.title}>FIND NOTE</h1>
      <div>
        <div>
          <input
            type="text"
            className={classes.input}
            placeholder="Find a note"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className={classes.submit}
            onClick={async () => {
              search();
            }}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
}