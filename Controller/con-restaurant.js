const restData=require('../Model/restaurantdata.json');
exports.getAllRestaurant=(req,res)=>{
    res.status(200).json({
        message:"rest found by city name",
        data: restData
    })
}
exports.getRestaurantByLocation=(req,res)=>{

    let cityData=restData.filter((value)=>value.city_name==req.params.city)
    console.log(cityData.length);
    cityData.length?
    res.status(200).json({
        message:"rest found by city name",
        data: cityData
    }):
    res.status(200).json({
        message:"no restaurant found by this city name",
        
        
    })
}