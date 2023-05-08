const Mongoose = require("mongoose")
const TimerSchema = new Mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    minutes:{
        type:Number,
        required:true
    },
    seconds: {
        type:Number,
        required:true
    },
})
const Timer = Mongoose.model("timer",TimerSchema)
module.exports = Timer