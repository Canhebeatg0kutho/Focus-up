import { EDGE_UNSUPPORTED_NODE_APIS } from "next/dist/shared/lib/constants";
import { useState } from "react";
import uuid from "uuid";
export default function ToDoForm(addTodo) {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed:false
    });

    function handleTaskInputChange(e){
        setTodo({...todo,task: e.target.value})

    }

    function handleSubmit(){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo,id: uuid.v4});
            //reset task input
            setTodo({...todo, task: ""});
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            name="task"
            type="text"
            value ={todo.task}
            onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
        </form>
    )



}

