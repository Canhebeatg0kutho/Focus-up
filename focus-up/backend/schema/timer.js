const Mongoose = require("mongoose")
const TimerSchema = new Mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    minutes:{
        type:Number,
    },
    seconds: {
        type:Number,
    },
})
const Timer = Mongoose.model("timer",TimerSchema)
module.exports = Timer