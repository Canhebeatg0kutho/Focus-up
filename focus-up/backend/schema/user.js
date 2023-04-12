const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
})

const User = Mongoose.model("user",UserSchema)
module.exports = User