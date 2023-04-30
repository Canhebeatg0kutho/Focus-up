const Mongoose = require("mongoose")
const ToDoSchema = new Mongoose.Schema({
    task: {
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
})

module.exports = Mongoose.model("todo",ToDoSchema)
