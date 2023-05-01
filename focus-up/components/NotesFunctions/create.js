
import { useEffect, useState } from "react";
import classes from "../../pages/notes/notes.module.css";




export default function Create(){
    const [titleText, setTitle] = useState("");
    const addNote =
        async () => {
          await fetch(`http://3.211.182.247:3000/notes/create`, {
            method: "POST",
            Accept: "application/json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: titleText,
            }),
          });
        };



    return(
       <div>
      {/* CREATE NOTE */}
      <h1 className={classes.title}>CREATE NOTE</h1>
      <div>
        <form>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter a new note title"
            value={titleText}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className={classes.submit}
            onClick={async () => {
              addNote();
            }}
          >
            Add
          </button>
        </form>
      </div>


       </div>




    )
}