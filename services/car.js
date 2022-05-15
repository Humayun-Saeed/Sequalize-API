var car=require('../Models/car')
const person = require('../Models/person')
var perosn=require('../Models/person')

module.exports.add_car=async({name,color})=>{
return await car.create({name,color})
}