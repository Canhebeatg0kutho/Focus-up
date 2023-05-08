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
    if (!req.body.minutes && !req.body.seconds) {
      throw new Error("Both minutes and seconds are required");
    }

    const edit = await Timer.findOneAndUpdate({title: req.body.title}, {
      minutes: req.body.minutes,
      seconds: req.body.seconds,
    },{ new: true });
    res.json([edit]);
  } catch (err) {
   console.error(err)
  }
});


module.exports = router;
