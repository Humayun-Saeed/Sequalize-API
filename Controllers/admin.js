var admin=require('../services/admin')
var user=require('../services/user')

module.exports.create_admin=async(req,res)=>{
    var data=await admin.add_admin(req.body)
    var user_id=data.id
    const user_data=await user.add_user(req.body.email,req.body.password,req.body.role,user_id)
    res.json({id:data.id,name:data.name,email:user_data.email,password:user_data.password,role:user_data.role})
}
module.exports.get_admin=async(req,res)=>{
    const data=await admin.get_admin(req.body.id)
    res.json(data)
}
module.exports.delete=async(req,res)=>{
    await admin.delete_admin(req.body.id)
}
module.exports.sum_age=async(req,res)=>{
   const data= await admin.sum_age()
   res.json(data)
}