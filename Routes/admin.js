var admin=require('../Controllers/admin')
var express=require('express')
var router=express.Router()
router.post('/admin',admin.create_admin)
router.post('/admin/delete',admin.delete)
router.post('/admin/id',admin.get_admin)
router.get('/admin',admin.sum_age)
module.exports=router