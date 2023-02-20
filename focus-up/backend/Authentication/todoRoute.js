const express = require("express");
const router = express.Router();
const Todo = require("../schema/toDo")

router.post('/', async (req, res) => {
    const todo = new Todo({
      task: req.body.task,
    });
  
    try {
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.get('/', async (req,res) =>{
    try{
         const AllTasks=await Todo.find()
         res.json(AllTasks)
    } catch (err){
        res.status(500).json({message: err.message})
    }
  })
  
  router.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id
    await Todo.findById(id)
      .then(todo => todo.remove())
      .then(todo =>
        res.status(201).json({ message: "User successfully deleted", todo })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
      )
  })
  
  module.exports = router;