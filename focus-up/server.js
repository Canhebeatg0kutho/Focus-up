
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config
}
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const Mongoose = require("mongoose")
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')
const User = require("./backend/schema/User");
const cors = require('cors');

var path = require("path");

const initializePassport= require('./backend/Passport/passport-config')
const passport = require('passport')
initializePassport(
passport,
username => User.find(user => user.username === username),
 id => User.find(user => user.id === id)
)

mongoose.connect('mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))

app.use(cors())
app.use(express.json())
app.set("view engine","ejs")
app.use(flash())
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false

}))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({extended: false}))

const userRouter = require('./backend/Authentication/userRoute')
app.use('/users', userRouter)

const adminRouter = require('./backend/Authentication/adminRoute')
app.use('/admin',adminRouter)

const todoRouter = require('./backend/Authentication/todoRoute')
app.use('/todo',todoRouter)

const notesRouter = require('./backend/Authentication/notesRoute')
app.use('/notes',notesRouter)

app.use((req,res,next)=>{
  res.status(401).send('NOT_FOUND');
})

app.set('views', path.join(__dirname, '/views'));

















app.post('/register',checkNotAuthenticated, async (req, res) => {
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
  
  
  app.post('/login',checkNotAuthenticated, async (req,res)=>{
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
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/',checkAuthenticated, (req, res) => {
    res.render('index.ejs', { username: req.user.username })
  })
  
  app.get('/login',checkNotAuthenticated, (req, res) => {
    res.render('login')
  })
  
  app.get('/register',checkNotAuthenticated, (req, res) => {
    res.render('register')
  })
  
  app.delete('/logout', (req, res) => {
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
  



app.listen(3000,()=> console.log('Server Started'))