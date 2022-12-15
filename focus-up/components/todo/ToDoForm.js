import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    //Takes in user input
    const [ userInput, setUserInput ] = useState('');

    // When this function is called, the userInput is updated to the current input entered. Value is the value in the input element, which is userInput state
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

     //when input is submitted, the addTask prop passed down is called, it adds the current userInput when submit is entered. It then clears the input.
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* When the the userInput state changes, it calls the handleChange function */}
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;