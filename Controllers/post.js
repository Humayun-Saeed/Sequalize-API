//const { model } = require('mongoose')
var post=require('../services/post')

module.exports.add_post=async(req,res)=>{
    const data=await post.add_post(req.body)
    res.json(data)
}
module.exports.get_post=async(req,res)=>{
    const data=await post.get(req.body.id)
    res.json(data)
}