const Menus =require('../Model/menu')


exports.getAllMenu=(req,res)=>{
    let filter={};
    Menus.find(filter)
    .then(response=>{
        res.status(200).json({
            message:" menu fetched successfully",
            data:response
        })
    })
    .catch(err=>{res.status(500).json({
        message:"error occured while fetching menu",
        error:err
    })
    })
}