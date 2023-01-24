require('dotenv').config()

const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const Mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))

app.use(express.json())

app.listen(3001,()=> console.log('Server Started'))