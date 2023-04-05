const Mongoose = require("mongoose")
const TimerSchema = new Mongoose.Schema({
    minutes:{
        type:Number,
    },
    seconds: {
        type:Number,
    },
})
const Timer = Mongoose.model("timer",TimerSchema)
module.exports = Timer