const express = require("express");
const router = express.Router();
const Notes = require("../schema/notes")


router.get('/',async(req,res)=>{
    try{
         const allNotes = await Notes.find()
         res.json([allNotes]) 
    } catch(err){
        res.json({message:err.message})
    }
})

router.post('/create',async(req,res)=>{
   const note = new Notes({
    title:req.body.title,
    note:req.body.note
   });
   try{
       const createNote = await note.save();
       res.json([createNote])
   }catch(err){
    res.status(400).json({ message: err.message });
   }
})


module.exports = router; 