const express = require("express");
const router = express.Router();
const Notes = require("../schema/notes")


router.get('/',async(req,res)=>{
    try{
         const allNotes = await Notes.find()
         res.json(allNotes) 
    } catch(err){
        res.json({message:err.message})
    }
})

router.post('/create',async(req,res)=>{
   const note = new Notes({
    title:req.body.title,
   });
   try{
       const createNote = await note.save();
       res.json([createNote])
   }catch(err){
    res.status(400).json({ message: err.message });
   }
})

router.post('/find', async(req, res, next) => {
   const findNote = new Notes({
      title:req.body.title,
   })
   try{
    const newNote = await Notes.find({title:findNote.title})
    res.json(newNote)
   } catch(err){
     res.status(400).json({message:err.message})
   }
 })

router.get('/:title', async(req,res)=>{
    try{
      const specificNote = await Notes.findOne({title:req.params.title})
      res.json([specificNote])
    }catch(err){
      res.json({message: err.message})
    }
  })
  

  router.patch('/update/note/:title',async(req,res)=>{
     try{
        const updated = await Notes.findOneAndUpdate({title:req.params.title},
         {note:req.body.note}
        ,{ new: true })
        res.json([updated])
     } catch(err){
        res.json({message: err.message})
     }
  })

  router.patch('/update/title/:title',async(req,res)=>{
   try{
      const updated = await Notes.findOneAndUpdate({title:req.params.title},
       {title:req.body.title}
      ,{ new: true })
      res.json([updated])
   } catch(err){
      res.json({message: err.message})
   }
})

router.delete('/delete/title/:title',async(req,res)=>{
   try{
      const deleted = await Notes.findOneAndDelete({title:req.params.title})
      res.json({message:"note successfully deleted",deleted})
   }catch(err){
      res.json({message: err.message})
   }
})

module.exports = router; 