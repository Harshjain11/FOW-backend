const Razorpay=require('razorpay');
const shortid=require('shortid');


var instance = new Razorpay({
     key_id: 'rzp_test_vfHYKSmRB4SdDT',
      key_secret: '0II8o6WtXlbzy6x60q1UvM8Z'
     })

     exports.createOrder=async(req,res)=>{
        let options={
            amount: req.body.amount *100,
            currency: "INR",
            receipt: shortid.generate(),
            notes: {
              key1: "value3",
              key2: "value2"
            }
        }
       try{  const response=await instance.orders.create(options)
        console.log(response)
        res.json(response)}catch(error){
            console.log(error)
        }
     }

