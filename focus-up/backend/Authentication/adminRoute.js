const express = require("express");
const router = express.Router();
const Admin = require("../schema/admin")
const bcrypt = require("bcryptjs");


router.post('/login', async (req,res)=>{
    const admin = new Admin({
      username: req.body.username,
      password: req.body.password
    });
    try{
      const existingAdmin= await Admin.findOne({username:admin.username})
      if(!existingAdmin){
        res.status(401).json ({
          message: "Login not successful",
          error: "Admin not found",
        })
      }else{
          bcrypt.compare(admin.password,existingAdmin.password).then((result)=>{
          result ?  res.status(201).json(existingAdmin) :  res.status(401).json ({message: "Login not successful", error: "Admin not found",})
        })
      }
    } catch (err){
      res.status(400).json({message: err.message})
    }
  })

  
router.post('/register', async (req, res) => {
    const admin = new Admin({
      username: req.body.username,
      password: req.body.password
    });
  
    try {
      bcrypt.hash(admin.password,10).then(async (hash)=>{
        const newAdmin = await Admin.create({
          username: admin.username,
          password: hash
        });
        res.status(201).json(newAdmin);
      })
  
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  module.exports = router;