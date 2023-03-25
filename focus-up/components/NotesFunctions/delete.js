import { useEffect, useState } from "react";
import classes from "../../pages/notes/notes.module.css";


export default function Delete() {
  const [deleteTitle, setDeleted] = useState("");
  const deleteNote = async (deleteTitle) => {
    await fetch(`http://localhost:3000/notes/delete/title/${deleteTitle}`, {
      method: "DELETE",
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleText,
      }),
    });
  };

  return (
    <div>
      {/* DELETE NOTE */}
      <h1 className={classes.title}>DELETE NOTE</h1>
      <div>
        <form>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter a note to delete"
            value={deleteTitle}
            onChange={(e) => setDeleted(e.target.value)}
          />
          <button
            className={classes.submit}
            onClick={async () => {
              deleteNote(deleteTitle);
            }}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
