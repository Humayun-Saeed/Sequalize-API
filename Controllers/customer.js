var customer=require('../services/customer')
var user=require('../services/user')

module.exports.create_customer=async(req,res)=>{
    const data=await customer.add_customer(req.body)
    var user_id=data.id
    const customer_data=await user.add_user(req.body.email,req.body.password,req.body.role,user_id)
    res.json({...data,email:customer_data.email,password:req.body.password,role:req.body.role,user_id})

}