var user=require('../Controllers/user')
var express=require('express')
//const user = require('../Models/user')
var router=express.Router()
router.post('/user',user.login)
module.exports=router