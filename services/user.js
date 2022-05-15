var user=require('../Models/user')
var admin=require('../Models/admin')

module.exports.add_user=async(email,password,role,user_id)=>{
   return await user.create({email,password,role,user_id})
}
module.exports.log_in=async(email,password,role)=>{

    return await user.findOne({where:{email}})

}
