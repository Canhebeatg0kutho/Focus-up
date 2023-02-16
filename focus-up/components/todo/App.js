import React, { useState } from 'react';
import data from "./data.json";
import axios from "axios"

//components
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import classes from "./todo.module.css"
import Title from "./title"

function App() {
  //State initialised to whatever is inside data json
  const [ toDoList, setToDoList ] = useState([]);
  const configuration = {
    method: "get",
    url:"http://localhost:3000/todo"
}
axios(configuration)
.then((result) => {setToDoList(result.data)})
.catch((error) => {error = new Error();})



  //Pass in id of todo clicked
  const handleToggle = (id) => {
    //Maps over toDoList, displays the list of tasks using spread operator. If task is clicked, the id of the task is found. 
    // If the id's complete parameter is set to the opposite of its current state, otherwise it displays as normal
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  //filters a new array filled with tasks whose complete parameter say "false"
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  //This function takes in userInput from form class. Creates a copy of the toDoList Array, then sets the copy variable to include the existing array copied,
  // And adds a todo with an incremented id, a task which is assigned the userInput, and sets complete to false
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className={classes.container}>
      {/* Creates props using toDoList state */}
      <Title/>
      <div className={classes.interact}>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter= {handleFilter}/>
      <ToDoForm addTask={addTask}/>
      </div>
    </div>
  );
}

export default App;
