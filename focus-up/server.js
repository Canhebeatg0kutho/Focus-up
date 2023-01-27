require('dotenv').config()

const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const Mongoose = require("mongoose")

mongoose.connect('mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))

app.use(express.json())
app.set("view engine","ejs")

const userRouter = require('./Authentication/route')
app.use('/users', userRouter)

app.get("/",(req,res) => res.render("home"))
app.get("/register",(req,res) => res.render("register"))
app.get("/login",(req,res) => res.render("login"))


app.listen(3000,()=> console.log('Server Started'))