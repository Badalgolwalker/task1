const express = require("express")
const { Hompage,productupload,usersignup,productupdate,productdelete,productu,edit,usercreate,addCategory,Category, addSubcategory,SubCategory } = require("../controller/indexc")
const router = express.Router()

router.get("/",Hompage)

router.get("/productu",productu)
router.get("/usercreate",usercreate)


router.post("/usersignup",usersignup)


router.post("/productupload",productupload)


router.post("/productupdate/:id",productupdate)

router.get("/productdelete/:id",productdelete)

router.get("/edit/:id",edit)
router.post('/addcategory', addCategory);
router.get('/category', Category);
router.get('/subcategory', SubCategory);
router.post('/addsubcategory', addSubcategory);



module.exports = router