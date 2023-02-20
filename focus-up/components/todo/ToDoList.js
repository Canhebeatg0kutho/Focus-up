import React from 'react';
import ToDo from './ToDo';
import classes from "./todo.module.css"
import axios from "axios"


//Passes in props 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {

    
    return (
        <div>
            {/* Mapping over toDoList prop to create individual todos after it is called */}
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            {/* If button is pressed, it calls the handleFilter function passed down as a prop */}
             <button className={classes.delete}style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;