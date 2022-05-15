var person=require('../Controllers/person')
var express=require('express')
const { route } = require('./user')
var router=express.Router()
router.post('/add',person.add)
router.get('/get',person.get)
module.exports=router
//router.get('/add',person)
