const mongoose = require("mongoose")

exports.connectdb = async() =>{
  try{

    await mongoose.connect("mongodb://127.0.0.1:27017/task1")
    console.log("connect ho gya")
  }catch(err){
    console.log(err)
  }
}