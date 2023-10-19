const Locations=require('../Model/location');

exports.getAllLocation=(req,res)=>{
    let filter={};
    Locations.find(filter)
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