import ToDo from "./ToDo"
export default function ToDoList({ToDoList}){
    return(
        <ul>
            {todos.map( todo =>(
                <ToDo key={todo.id} todo={todo}/>
            ))}
        </ul>
    )

}