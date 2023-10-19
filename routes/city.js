
const express=require('express');
const controllerRest=require('../Controller/con-restaurant.js');

const router=express.Router();
router.get('/',controllerRest.getAllRestaurant)
router.get('/:city',controllerRest.getRestaurantByLocation)






module.exports=router