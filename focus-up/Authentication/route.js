const express = require("express");
const router = express.Router();
const User = require("../schema/User");

router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
