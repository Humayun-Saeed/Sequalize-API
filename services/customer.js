var customer=require('../Models/customer')

module.exports.add_customer=async({name,age,address})=>{
return await customer.create({name,age,address})
}
module.exports.find_customer=async(req,res)=>{

    return await customer.findOne(id,{include:[]})
}