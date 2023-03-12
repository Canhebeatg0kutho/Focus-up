const Mongoose = require("mongoose")
const notesSchema = new Mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    note:{
        type:String,
        default:false
    },
})

const ToDo = Mongoose.model("todo",ToDoSchema)
module.exports = ToDo