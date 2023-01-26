const express = require("express");
const router = express.Router();
const User = require("../schema/User");
const bcrypt = require("bcryptjs");

router.post('/register', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  try {
    bcrypt.hash(user.password,10).then(async (hash)=>{
      const newUser = await User.create({
        username: user.username,
        password: hash
      });
      res.status(201).json(newUser);
    })
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.post('/login', async (req,res)=>{
  try{
    const existingUser = await User.findOne({username:req.body.username, password:req.body.password})
    if(!existingUser){
      res.status(401).json ({
        message: "Login not successful",
        error: "User not found",
      })
    }else{
      res.status(201).json(existingUser);
    }
  } catch (err){
    res.status(400).json({message: err.message})
  }
})
module.exports = router;
