import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Buttons from "../../components/Tabs/Buttons";
import classes from "./notes.module.css";




export default function search(){
    const [findTitle, setFound] = useState("");
    const [foundTitles, setFind] = useState([]);

   const search =  async () => {
        try {
          const res = await fetch(`http://localhost:3000/notes/find`, {
            method: "POST",
            Accept: "application/json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: findTitle,
            }),
          });
          const data = await res.json();
          setFind(data);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };


    return(
     <div>
     {/* FIND NOTE */}
      <h1 className={classes.title}>FIND NOTE</h1>
      <div>
        <form>
          <input
            type="text"
            className={classes.input}
            placeholder="Find a note"
            value={findTitle}
            onChange={(e) => setFound(e.target.value)}
          />
          <button
            className={classes.submit}
            onClick={async () => {
              findNote({ title: findTitle });
            }}
          >
            Find
          </button>
        </form>
      </div>


      {foundTitles.map((found) => (
            <Link href={"/notes/" + found.title} key={found.id}>
              <a>
                <div>
                  <button className={classes.noteTitle}>{found.title}</button>
                </div>
              </a>
            </Link>
          ))}
    
     </div>
      


    )
}