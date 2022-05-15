var customer=require('../Controllers/customer')
var express=require('express')
var router=express.Router()
router.post('/customer',customer.create_customer)
module.exports=router