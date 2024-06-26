const userModel = require("../models/usermodel")
const Category = require("../models/categorymodel")
const productmodel = require("../models/productmodel")
const subcategory = require("../models/subcategory")

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
  res.json(product)
}




exports.productupdate = async(req,res,next) =>{

 const product = await productmodel.findByIdAndUpdate({_id:req.params.id},{ name:req.body.name,
  price:req.body.price,
  description:req.body.description})

 res.redirect("/")
}



exports.productdelete = async(req,res,next) =>{

const product = await productmodel.findByIdAndDelete({_id:req.params.id}).exec()
res.json("delete successfully")
 }

 
exports.addCategory = async(req,res,next) =>{

  const category = await new Category(req.body).save()
  res.json(category)
   }
  

    
exports. SubCategory= async(req,res,next) =>{
const category = await Category.findById({_id:req.params.id}).exec()
const SubCategory = await new subcategory({
  categoryid:category._id,
  subCategory:req.body.subCategory
}).save()
res.json(SubCategory)

   }
 

