import { useEffect, useState } from "react";
import classes from "../../pages/notes/notes.module.css";


export default function Update(){
    const [titleChange, setChanged] = useState("");
    const [newTitle, setNew] = useState("");
      
  const changeTitle = async (titleChange) => {
    await fetch(`http://3.211.182.247/notes/update/title/${titleChange}`, {
      method: "PATCH",
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    });
  };
   
    
    return(
     <div>
          {/* UPDATE NOTE */}
      <h1 className={classes.title}>UPDATE NOTE TITLE</h1>
      <div>
        <form>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter target title"
            value={titleChange}
            onChange={(e) => setChanged(e.target.value)}
          />
          <input
            type="text"
            className={classes.input}
            placeholder="Enter new title name"
            value={newTitle}
            onChange={(e) => setNew(e.target.value)}
          />
          <button
            className={classes.submit}
            onClick={async () => {
              changeTitle(titleChange, { title: newTitle });
            }}
          >
            Change
          </button>
        </form>
        </div>
     </div>
    )

}