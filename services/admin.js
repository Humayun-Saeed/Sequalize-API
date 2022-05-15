//const { Sequelize } = require('sequelize/types')
var sequelize=require('../DB_Connection')
var admin=require('../Models/admin')

module.exports.add_admin=async({name,age})=>{
return await admin.create({name,age})
}
module.exports.delete_admin=async(id)=>{
    return await admin.destroy({where:{id}})
}
module.exports.get_admin=async(id)=>{
    return await admin.findOne({where:{id}},{include:["customer"]})
}
module.exports.sum_age = async() =>{ 
return await admin.findAll({
    attributes:  [[sequelize.fn('sum', sequelize.col('age')),'total']],
    // group : ['SaleItem.itemId'],
    // raw: true,
    // order: sequelize.literal('total DESC')
  });
}