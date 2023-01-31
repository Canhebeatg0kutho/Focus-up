
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




const initializePassport= require('./backend/Passport/passport-config')
const passport = require('passport')
initializePassport(passport,
username => users.find(user => user.username === username),
 id => users.find(user => user.id === id)
)

mongoose.connect('mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))

app.use(express.json())
app.set("view engine","ejs")
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false

}))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({extended: false}))

const userRouter = require('./backend/Authentication/route')
app.use('/users', userRouter)

app.get("/",(req,res) => res.render("home"))
app.get("/register",(req,res) => res.render("register"))
app.get("/login",(req,res) => res.render("login"))


app.listen(3000,()=> console.log('Server Started'))