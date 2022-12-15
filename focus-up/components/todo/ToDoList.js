import React from 'react';
import ToDo from './ToDo';

//Passes in props 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {/* Mapping over toDoList prop to create individualt todos after it is called */}
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            {/* If button is pressed, it calls the handleFilter function passed down as a prop */}
             <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;