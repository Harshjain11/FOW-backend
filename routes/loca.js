
const locaController=require('../Controller/locationCon')
const express=require('express');
const router=express.Router();


router.get('/',locaController.getAllLocation)

module.exports=router