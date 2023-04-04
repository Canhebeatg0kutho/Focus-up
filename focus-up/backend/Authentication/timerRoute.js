const express = require("express");
const router = express.Router();
const Timer = require("../schema/timer");

router.get("/", async (req, res) => {
  try {
    const allTimes = await Timer.find();
    res.json(allTimes);
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

module.exports = router;
