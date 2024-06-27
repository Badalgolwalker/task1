const userModel = require("../models/usermodel")
const Category = require("../models/categorymodel")
const productmodel = require("../models/productmodel")
const subcategory = require("../models/subcategory")
const mongoose = require("mongoose")

exports.Hompage = async(req,res,next) =>{
 const product = await productmodel.find().exec()
 res.render("allproduct",{product})
}

exports.usercreate = async(req,res,next) =>{
  res.render("user")
  }
  


exports.productu = async(req,res,next) =>{
 res.render("productupload")
 }

 exports.Category = async(req,res,next) =>{
  res.render("category")
  }

  exports.SubCategory = async(req,res,next) =>{
    res.render("subcategory")
    }
   
 

exports.usersignup = async(req,res,next) =>{
  
  const user = await new userModel(req.body).save()
res.redirect("/")
}


exports.edit = async(req,res,next) =>{
  const product = await productmodel.findById({_id:req.params.id}).exec()
  res.render("edit",{product})
}


exports.productupload = async(req,res,next) =>{
  const product = await new productmodel(req.body).save()
  res.redirect("/")
}




exports.productupdate = async(req,res,next) =>{

 const product = await productmodel.findByIdAndUpdate({_id:req.params.id},{ name:req.body.name,
  price:req.body.price,
  description:req.body.description})

 res.redirect("/")
}



exports.productdelete = async(req,res,next) =>{

const product = await productmodel.findByIdAndDelete({_id:req.params.id}).exec()
res.redirect("/")
 }

 exports.addCategory = async (req, res, next) => {
  try {
      const { name } = req.body;

      const category = await new Category({
          name,
      }).save();

      res.json(category);
  } catch (err) {
      next(err);
  }
};

exports.addSubcategory = async (req, res, next) => {
  try {
    const { id, name } = req.body;

    // Convert id to ObjectId
    const categoryIdObject =mongoose.Types.ObjectId(id);

    const subCategory = await new subcategory({
      categoryid: categoryIdObject,
      name
    }).save();

    const category = await Category.findById(categoryIdObject);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    category.subcategories.push(subCategory._id);
    await category.save();

    res.json(subCategory);
  } catch (err) {
      next(err);
  }
};
 

