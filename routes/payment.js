const express=require('express');
const paymentController=require('../Controller/paymentCon')
const router=express.Router();


router.post('',paymentController.createOrder)

module.exports=router