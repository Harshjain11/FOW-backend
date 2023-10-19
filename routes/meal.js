const express=require('express');
const mealController=require('../Controller/mealCon')
const router=express.Router();


router.get('/',mealController.getAllMeal)

module.exports=router