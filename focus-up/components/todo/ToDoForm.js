import React, { useState } from 'react';
import classes from "./todo.module.css"
import axios from "axios"


const ToDoForm = ({ addTask }) => {

    //Takes in user input
    const [ userInput, setUserInput ] = useState('');
    const [task,setTask] = useState('')

    // When this function is called, the userInput is updated to the current input entered. Value is the value in the input element, which is userInput state
    const handleChange = (e) => {
        (e) => setTask(e.target.value)
    }

     //when input is submitted, the addTask prop passed down is called, it adds the current userInput when submit is entered. It then clears the input.
    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url:"http://localhost:3000/todo",
            data:{
                task,
            }
        }
        axios(configuration)
        .then((result) => {setTask(result.data);
        addTask(task);
        setTask(" ");})
        .catch((error) => {error = new Error();})
        
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* When the the userInput state changes, it calls the handleChange function */}
            <input className={classes.input}value={task} type="text" onChange={(e) => setTask(e.target.value)} placeholder="Enter task..."/>
            <button className={classes.submit}>Submit</button>
        </form>
    );
};

export default ToDoForm;