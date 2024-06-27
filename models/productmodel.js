const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name:String,
  price:Number,
  description:String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }
})



module.exports = mongoose.model("product",productSchema)