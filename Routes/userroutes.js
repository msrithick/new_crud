const express = require('express');
const router = express.Router();


const userController=require("../Controller/usercontroller")


router.post('/mobilebrand',userController.mobile_brand);
router.put("/update_mobile",userController.update_mobile);
router.get("/getMobile",userController.getMobile);
router.delete("/deleteMobile",userController.deleteMobile)


module.exports=router;