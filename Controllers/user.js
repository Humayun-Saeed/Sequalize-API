var user=require('../services/user')
var admin=require('../services/admin')
var customer=require('../services/customer')

//log in
module.exports.login=async(req,res)=>{
    const data=await user.log_in(req.body.email)
if(role==0){
const admin_data=await admin.get_admin(data.id)   
res.json(...admin_data);
}
}