const express = require("express")
const { Hompage,productupload,usersignup,productupdate,productdelete,productu,edit,usercreate,deleteSubcategory,updateSubcategory,getSubcategoriesByCategory,createSubcategory,deleteCategory,updateCategory,getAllCategories,createCategory,addCategory,SubCategory } = require("../controller/indexc")
const router = express.Router()

router.get("/",Hompage)

router.get("/productu",productu)
router.get("/usercreate",usercreate)


router.post("/usersignup",usersignup)


router.post("/productupload",productupload)


router.post("/productupdate/:id",productupdate)

router.get("/productdelete/:id",productdelete)

router.get("/edit/:id",edit)

router.post("/add-category",addCategory)

router.post("/sub-category/:id",SubCategory)



module.exports = router