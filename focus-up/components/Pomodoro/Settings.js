import { useEffect, useState } from "react";
import classes from "./pomo.module.css";

export default function Settings() {
  const [title, setTitle] = useState("Work");
  const [newSeconds, setSeconds] = useState("");
  const [newMinutes, setMinutes] = useState("");
  const [currentState, changeState] = useState(true);
  const [submit, isSubmit] = useState(false);
  const refresh = () => {
    window.location.reload(true);
  };
  const editTimer = async (e) => {
    e.preventDefault();
    await fetch("http://3.211.182.247:3000/timer/edit", {
      method: "PATCH",
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        minutes: newMinutes,
        seconds: newSeconds,
      }),
    });
  };

  const handleClick = () => {
    changeState(!currentState);
    currentState ? setTitle("Work") : setTitle("Break");
  };

  useEffect(() => {
    if (submit) {
      refresh();
    }
  },[submit]);
  
  return (
    <div>
      <div  className={classes.form}>
        <p className={classes.settingsTitle}>Settings for {title}</p>
        <form onSubmit={editTimer}>
        <button className={classes.change} onClick={() => handleClick()}>
          Change settings
        </button>
        <div className={classes.setTimes}>
          <input
            type="text"
            className={classes.inputMin}
            placeholder="Enter new minutes"
            value={newMinutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <input
            type="text"
            className={classes.inputSec}
            placeholder="Enter new seconds"
            value={newSeconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>
        <button
          className={classes.submit}
          onClick={async () => {
            editTimer();
            isSubmit(true);
          }}
        >
          Submit
        </button>
        </form>
      </div>
    </div>
  );
}
