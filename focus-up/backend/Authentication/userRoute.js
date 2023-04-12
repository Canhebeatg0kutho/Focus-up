const express = require("express");
const router = express.Router();
const User = require("../schema/user");
const Admin = require("../schema/admin")
const bcrypt = require("bcryptjs");
const passport = require('passport')
const app = express()
const isAuth = require('../passport/auth').isAuth;
const genPassword= require("../passport/passwordUtils").genPassword
app.set("view engine","ejs")

// router.get('/', async (req,res) =>{
//   try{
//        const Allusers=await User.find()
//        res.json(Allusers)
//   } catch (err){
//       res.status(500).json({message: err.message})
//   }
// })

router.get('/', (req, res, next) => {
  res.send('<h1>Home</h1><p>Please <a href="/users/register">register</a></p>');
});

router.get('/register', (req, res, next) => {

  const form = '<h1>Register Page</h1><form method="post" action="register">\
                  Enter Username:<br><input type="text" name="username">\
                  <br>Enter Password:<br><input type="password" name="password">\
                  <br><br><input type="submit" value="Submit"></form>';

  res.send(form);
  
});


router.get('/login', (req, res, next) => {
  const form = '<h1>Login Page</h1><form method="POST" action="/users/login">\
  Enter Username:<br><input type="text" name="username">\
  <br>Enter Password:<br><input type="password" name="password">\
  <br><br><input type="submit" value="Submit"></form>';

  res.send(form);

});

router.get('/protected-route', isAuth, (req, res, next) => {
  res.send('You made it to the route.');
});



router.get('/login-success', (req, res, next) => {
  res.send('<p>You successfully logged in. --> <a href="/users/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
  res.send('You entered the wrong password.');
});

router.post('/register', async(req, res, next) => {
  const saltHash = genPassword(req.body.password);
  
  const salt = saltHash.salt;
  const hash = saltHash.hash;
  try{
    const newUser = new User({
      username: req.body.username,
      hash: hash,
      salt: salt,
  });

  await newUser.save()
    
  res.redirect('/users/login')
  }catch(err){
    res.status(400).json({message: err.message})
  }
  
});



router.post('/login',passport.authenticate('local',{ failureRedirect: '/users/login-failure',  successRedirect: '/users/login-success' }))

router.delete('/:id', async(req,res)=>{
  const id = req.params.id
  await User.findById(id)
    .then(user => user.remove())
    .then(user =>
      res.status(201).json({ message: "User successfully deleted", user })
    )
    .catch(error =>
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message })
    )

})

router.get('/:username', async(req,res)=>{
  try{
    const specificUser = await User.findOne({username:req.params.username})
    res.json([specificUser])
  }catch(err){
    res.json({message: err.message})
  }
})



module.exports = router;
