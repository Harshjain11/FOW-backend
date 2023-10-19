const mongoose=require('mongoose');

const locaSchema=new mongoose.Schema({
    name:{type:String,required:true},
    city_id:{type:String,required:true},
    location_id:{type:String,required:true},
    country_name:{type:String,required:true}
})

module.exports=mongoose.model("Locations",locaSchema,"location")