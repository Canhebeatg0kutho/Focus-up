if(process.env.NODE_ENV !=='production'){
  require('dotenv').config
}
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const Mongoose = require("mongoose")
const cors = require('cors');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
//-------------------------PASSPORT SETUP------------------------//
require('./backend/passport/passport')




mongoose.connect('mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))

app.use(cors({credentials:true,  origin: ['http://localhost:3001', 'http://3.211.182.247:3001']}))
app.use(express.json())
app.use(express.urlencoded({extended: true}));


//-------------------------SESSION SETUP--------------------------//
const store  = new MongoStore({
  uri:'mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority',
  collection:'sessionStore'
})

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized:true,
  store:store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
  }
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
  })

  

// -------------------------ROUTES SETUP---------------------------//
const userRouter = require('./backend/Routes/userRoute')
app.use('/users', userRouter)

const adminRouter = require('./backend/Routes/adminRoute')
app.use('/admin',adminRouter)

const todoRouter = require('./backend/Routes/todoRoute')
app.use('/todo',todoRouter) 

const notesRouter = require('./backend/Routes/notesRoute')
app.use('/notes',notesRouter)

const timerRouter = require('./backend/Routes/timerRoute')
app.use('/timer',timerRouter)



app.use((req,res,next)=>{
res.status(401).send('NOT_FOUND');
})

app.listen(3000,()=> console.log('Server Started'))