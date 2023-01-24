const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const Mongoose = require("mongoose")
mongoose.connect('')

app.listen(3001,()=> console.log('Server Started'))