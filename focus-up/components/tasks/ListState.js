import Tasks from "./tasks.json"
import { useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";


export default function ListState(){
    const[toDoList,setToDoList] = useState(Tasks);
    
    const handleToggle = (id) =>{
        let mapped = toDoList.map(task => {
            return task.id == id ? {...task,complete: !task.complete} : {...task};
        });
        setToDoList(mapped);
    }


    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
    });
    setToDoList(filtered);
}

const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }



    return(
        <div> 
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
            <ToDoForm addTask={addTask}/>
        </div>
    );
}