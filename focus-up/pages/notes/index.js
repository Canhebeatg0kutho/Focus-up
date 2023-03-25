import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Buttons from "../../components/Tabs/Buttons";
import classes from "./notes.module.css";
import Search from "../../components/NotesFunctions/search";
import Delete from "../../components/NotesFunctions/delete";
import Create from "../../components/NotesFunctions/create";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/notes");
  const data = await res.json();

  return {
    props: { notes: data },
  };
}

export default function Notes({ notes }) {
  return (
    <div>
      <Nav />
      <Buttons />
      <Search/>
      <Delete/>
      <Create/>
      <button><Link href = '/noteSearch'>Notes</Link></button>
      {notes.map((note) => (
        <Link href={"/notes/" + note.title} key={note.id}>
          <a>
            <div>
              <button className={classes.noteTitle}>{note.title}</button>
            </div>
          </a>
        </Link>
      ))}
      </div>
  );
}
