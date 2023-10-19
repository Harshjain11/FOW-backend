const express=require('express');

const Restaurants=require('../Model/restaurant');

exports.getAllRestaurant=(req,res)=>{
    let filter={}

    Restaurants.find(filter)
    .then(response=>{
        res.status(200).json({
            message:" All restaurants fetched successfully",
            data:response
        })
    })
    .catch(err=>{res.status(500).json({
        message:"error occured",
        error:err
    })
    })

}

exports.getDataByFilter=(req,res)=>{
    let filter={};
    if(req.body.city_id){
        filter.city=req.body.city_id;
    }
    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name']={$in:req.body.cuisine}
    }
    if(req.body.lcost && req.body.hcost){
        if(req.body.lcost==0){
            filter.cost={$lte:req.body.hcost}
        }else{
            filter.cost={
                $lt:req.body.hcost,
                $gt:req.body.lcost,
                
            }
        }

    }
    let sort=1;
    if(req.body.sort){
        sort=req.body.sort
    }

    console.log(filter)
    Restaurants.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({cost:sort})
    .then(response=>{
        Restaurants.find(filter).count((err,count)=>{
            if(err){
                console.log(err)
            }else{
                  res.status(200).json({
            message:"restaurants fetched successfully",
            data:response,
            totalRecords:count
             })

            }
        })
      
    })
    .catch(err=>{res.status(500).json({
        message:"error occured",
        error:err
    })
    })

}

exports.getRestaurantProductDetails=(req,res)=>{
    let filter={};
   
        filter.name=req.params.rName;
    
    console.log(filter)
    Restaurants.findOne(filter)
    .then(response=>{
        res.status(200).json({
            message:"restaurants fetched successfully",
            data:response
        })
    })
    .catch(err=>{res.status(500).json({
        message:"error occured rest name",
        error:err
    })
    })
}

exports.getRestaurantBycid=(req,res)=>{
    let filter={};
   
        filter.city=req.params.cid;
    
    console.log(filter)
    Restaurants.find(filter)
    .then(response=>{
        res.status(200).json({
            message:" city's restaurants fetched successfully",
            data:response
        })
    })
    .catch(err=>{res.status(500).json({
        message:"error occured in city id",
        error:err
    })
    })
}