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
const cors = require('cors');
// const MongoStore = require('connect-mongo')(session);

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

// const sessionStore = new MongoStore({
//   mongooseConnection: connection,
//   collection: 'sessions'
// });

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
//  store: sessionStore,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24
  }
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

const timerRouter = require('./backend/Authentication/timerRoute')
app.use('/timer',timerRouter)

app.use((req,res,next)=>{
res.status(401).send('NOT_FOUND');
})

app.set('views', path.join(__dirname, '/views'));

app.listen(3000,()=> console.log('Server Started'))