const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    categoryid :[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"category"
    }],
    subCategory:String
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);