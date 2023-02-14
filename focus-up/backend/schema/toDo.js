const Mongoose = require("mongoose")
const ToDoSchema = new Mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true,
    },
    task: {
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
})

const ToDo = Mongoose.model("todo",ToDoSchema)
module.exports = ToDo