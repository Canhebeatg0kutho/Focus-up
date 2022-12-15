import classes from "./todo.module.css"

//Passes in todo prop defined in toDoList
const ToDo = ({todo, handleToggle}) => {
    //When this handler is called, it passes in the id of the task clicked into the handleToggle handler from App.js
      const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
      }
    

    return (
        // Checks if task is completed using "complete" param in data.js. If true, it uses strike as classname, if false, is assigned noStrike as classname
        //When the task is clicked, it calls the handleClick handler
        <div id={todo.id} key={todo.id +todo.task} name ="todo" value={todo.id} onClick={handleClick} className={todo.complete ? classes.strike : classes.noStrike}>
            {/* Gets individual task created in toDoList mapping function. Uses "Task" from data.json as parameter */}
            {todo.task}
        </div>
    );
};

export default ToDo;