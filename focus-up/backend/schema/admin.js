const Mongoose = require("mongoose")
const AdminSchema = new Mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password: {
        type:String,
        minlength: 6,
        required:true,
    },
})
const Admin = Mongoose.model("admin",AdminSchema)
module.exports = Admin