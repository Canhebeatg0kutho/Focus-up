import Tasks from "./tasks.json"
import { useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";


export default function ListState(){
    const[todos,setTodos] = useState([]);
    function addTodo(todo){
        setTodos([todo,...todos]);
    }

    return(
        <div>
        <p>Todo list</p>
        <ToDoForm addTodo={addTodo}/>
        <ToDoList toDoList={todos}/>
        </div>
    )
    
   
}