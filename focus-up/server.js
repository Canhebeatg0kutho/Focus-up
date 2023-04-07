
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config
}
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const Mongoose = require("mongoose")
const cors = require('cors');

mongoose.connect('mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))

app.use(cors())
app.use(express.json())

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

app.listen(3000,()=> console.log('Server Started'))