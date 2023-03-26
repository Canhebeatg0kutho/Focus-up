const Mongoose = require("mongoose")
const notesSchema = new Mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true,
    },
    note:{
        type:String,
        default: " ",
    },
})

const Notes = Mongoose.model("notes",notesSchema)
module.exports = Notes