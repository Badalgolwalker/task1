const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name:String,
  contact:String,
  password:String
})

module.exports = mongoose.model("user",userSchema)