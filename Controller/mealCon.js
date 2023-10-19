const Meals =require('../Model/meal')


exports.getAllMeal=(req,res)=>{
    let filter={};
    Meals.find(filter)
    .then(response=>{
        res.status(200).json({
            message:" All locations fetched successfully",
            data:response
        })
    })
    .catch(err=>{res.status(500).json({
        message:"error occured",
        error:err
    })
    })
}

