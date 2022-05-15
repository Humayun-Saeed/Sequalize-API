var post=require('../Controllers/post')
var express=require('express')
//const { route } = require('./car')
var router=express.Router()
router.post('/post',post.add_post)
router.get('/post',post.get_post)
module.exports=router