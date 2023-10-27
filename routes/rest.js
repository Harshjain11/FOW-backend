const restaurantCont=require('../Controller/restaurantCon');
const express=require('express');
const router=express.Router();

router.get('/',restaurantCont.getAllRestaurant);
router.get('/:cid',restaurantCont.getRestaurantBycid);
router.get('/details/:rName',restaurantCont.getRestaurantProductDetails);
router.get('/filter/details/:rName',restaurantCont.getRestaurantProductDetails);
router.post('/filter/:pageNo',restaurantCont.getDataByFilter);



// app.use('/restaurant/:cid',restaurantRoute);
// app.use('/restaurant/details/:rName',restaurantRoute);





module.exports=router;
