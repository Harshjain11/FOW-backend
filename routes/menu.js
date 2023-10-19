const express=require('express');
const menuController=require('../Controller/menuCon')
const router=express.Router();


router.get('/',menuController.getAllMenu)

module.exports=router