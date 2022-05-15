var comments=require('../Controllers/comments')
var express=require('express')
var router=express.Router()
router.post('/comments',comments.add_commets)
module.exports=router