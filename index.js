
require('dotenv').config();
const express=require('express');
const mongoose =require('mongoose')
const cityRoute=require('./routes/city')
const restaurantRoute=require('./routes/rest')
const locationRoute=require('./routes/loca')
const mealRoute=require('./routes/meal')
const menuRoute=require('./routes/menu')
const paymentRoute=require('./routes/payment')
const bodyparser=require('body-parser');
const cors=require('cors')
const app=express();

let PORT=process.env.PORT || 8089;
const DB ="mongodb+srv://root:tree@cluster0.z1lj9tx.mongodb.net/Zomato_44";
// "mongodb://127.0.0.1:27017/zomato_44"
mongoose.set('strictQuery', false);
mongoose.connect(DB);

// app.get('/',(req,res)=>{
//     res.send("you have called get method");
// })
app.use(cors());
app.use(bodyparser.json());
// app.use('/',cityRoute);
app.use('/location',locationRoute);
app.use('/restaurant',restaurantRoute);
app.use('/filter',restaurantRoute);

app.use('/meal',mealRoute);
app.use('/menu',menuRoute);
app.use('/payment',paymentRoute);




app.listen(PORT,()=>{
    console.log(`the server is up and running on port : ${PORT}`);
})