const express = require("express");
const router = express.Router();
const Timer = require("../schema/timer");

router.get("/:title", async (req, res) => {
  try {
    const allTimes = await Timer.findOne({title:req.params.title});
    res.json(allTimes);
    console.log(allTimes)
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.patch("/edit", async (req, res) => {
  try {
    const edit = await Timer.findOneAndUpdate({title: req.body.title}, {
      minutes: req.body.minutes,
      seconds: req.body.seconds,
    },{ new: true });
    res.json([edit]);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/create",async(req,res)=>{
  const create = new Timer({
    title:req.body.title,
    minutes:req.body.minutes,
    seconds:req.body.seconds
  })
  try{
    const newTimer = await create.save()
    res.json(newTimer)
  }catch(err){

  }
})


module.exports = router;
