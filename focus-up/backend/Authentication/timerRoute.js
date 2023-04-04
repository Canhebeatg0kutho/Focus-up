const express = require("express");
const router = express.Router();
const Timer = require("../schema/timer")


router.get('/',async(req,res)=>{
    try{
         const allTimes = await Timer.find()
         res.json(allTimes) 
    } catch(err){
        res.json({message:err.message})
    }
})



router.post('/create',async(req,res)=>{
    const timer = new Timer({
        seconds:req.body.seconds,
        minutes:req.body.minutes
    })
    try{
       const create = timer.save()
       res.json(create)
    }catch(err){
       
    }
})












module.exports = router; 