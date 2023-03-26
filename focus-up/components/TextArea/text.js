import classes from "./text.module.css"

export default function Text(){

 const setNote = async() =>{
     const data = awaitfetch(
        "http://localhost:3000/notes/update",
        {
           method:'PATCH',
           headers:{
            'Content-Type': 'application/json',
           },
           body:JSON.stringify({
            
           })
        }
     )
 }
    return(
        <div className={classes.text}>
        <textarea rows = "50" cols = "80" placeholder="Enter details here..."> </textarea>
        </div>
    )
}