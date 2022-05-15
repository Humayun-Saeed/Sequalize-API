var person=require('../services/person')
var car=require('../services/car')

module.exports.cars=async(req,res)=>{
const add=await car.add_car(req.body)
person=add
res.json(add)


}