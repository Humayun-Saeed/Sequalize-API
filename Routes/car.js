var car=require('../Controllers/car')
var express=require('express')
var router=express.Router()
router.post('/car',car.cars)
module.exports=router