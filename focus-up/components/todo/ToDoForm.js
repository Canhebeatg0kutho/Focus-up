import React, { useState } from 'react';
import classes from "./todo.module.css"
import axios from "axios"


const ToDoForm = ({ addTask }) => {

    //Takes in user input
    const [task,setTask] = useState('')

     //when input is submitted, the addTask prop passed down is called, it adds the current userInput when submit is entered. It then clears the input.
    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/todo`, {
            method: "POST",
            Accept: "application/json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              task: task,
            }),
          });
          try{
            addTask();
            setTask(" ");
          }catch(error){
           console.log(error)
    }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* When the the userInput state changes, it calls the handleChange function */}
            <input className={classes.input} value={task} type="text" onChange={(e) => {setTask(e.target.value)}} placeholder="Enter task..."/>
            <button className={classes.submit}>Submit</button>
        </form>
    );
};

export default ToDoForm;