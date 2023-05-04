import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Buttons from "../../components/Tabs/Buttons";
import classes from "./notes.module.css";
import Search from "../../components/NotesFunctions/search";
import Delete from "../../components/NotesFunctions/delete";
import Create from "../../components/NotesFunctions/create";
import Update from "../../components/NotesFunctions/update";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/notes");
  const data = await res.json();

  return {
    props: { notes: data },
  };
};

export default function Notes({ notes }) {
  const [isDeleted, setDeleted] = useState("");
  const deleteNote = async (deleteTitle) => {
    try {
      await fetch(`http://localhost:3000/notes/delete/title/${deleteTitle}`, {
        method: "DELETE",
        Accept: "application/json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Nav />
      <Buttons />
      <Search />
      {notes.map((note) => (
        <div className={classes.container}>
          <Link href={"/notes/" + note.title} key={note.id}>
            <a>
              <div>
                <button className={classes.noteTitle}>{note.title}</button>
              </div>
            </a>
          </Link>
            <button
              onClick={async () => deleteNote(note.title)}
              className={classes.delete}
            >
              X
            </button>
        </div>
      ))}

      <Create />
      <Delete />
      <Update />
    </div>
  );
}
