const express = require("express");
const router = express.Router();
const User = require("../schema/User");
const bcrypt = require("bcryptjs");
const passport = require('passport')
const app = express()
app.set("view engine","ejs")


router.post('/register',checkNotAuthenticated, async (req, res) => {
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
    res.redirect('/login')

  } catch (err) {
    res.status(400).json({ message: err.message });
    res.redirect('/register')
  }
});


router.post('/login',checkNotAuthenticated, async (req,res)=>{
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  try{
    const existingUser = await User.findOne({username:user.username})
    if(!existingUser){
      res.status(401).json ({
        message: "Login not successful",
        error: "User not found",
      })
    }else{
        bcrypt.compare(user.password,existingUser.password).then((result)=>{
        result ?  res.status(201).json(existingUser) :  res.status(401).json ({message: "Login not successful", error: "User not found",})
      })
    }
  } catch (err){
    res.status(400).json({message: err.message})
  }
})

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

router.get('/',checkAuthenticated, (req, res) => {
  res.render('index.ejs', { username: req.user.username })
})

router.get('/login',checkNotAuthenticated, (req, res) => {
  res.render('login')
})

router.get('/register',checkNotAuthenticated, (req, res) => {
  res.render('register')
})

router.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})



function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}



module.exports = router;
