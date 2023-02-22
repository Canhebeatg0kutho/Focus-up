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
  
  router.delete('/delte/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const task = await Todo.findOne({_id: id, complete: false});
      if (!task) {
        return res.status(404).json({message: "Task not found"});
      }
      await task.remove();
      res.status(200).json({message: "Task successfully deleted", task});
    } catch(err) {
      res.status(500).json({message: err.message});
    }
  });
  
  module.exports = router; 