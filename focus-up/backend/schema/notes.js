const Mongoose = require("mongoose")
const notesSchema = new Mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    note:{
        type:String,
    },
})

const Notes = Mongoose.model("notes",notesSchema)
module.exports = Notes