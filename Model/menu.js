const mongoose=require('mongoose');
const menuSchema=new mongoose.Schema({
    itemname:{type:String, required:true},
    itemdis:{type:String, required:true},
    cost:{type:Number, required:true},
    restaurantName:{type:String,required:true},
    isveg:{type:Boolean,required:true}
})


module.exports=mongoose.model("Menus",menuSchema,"menu");