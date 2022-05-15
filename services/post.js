var post=require('../Models/post')
var db=require('../DB_Connection')
const { model } = require('mongoose')

module.exports.add_post=async({name,author})=>{
    return await post.create({name,author})
}
module.exports.get=async(id)=>{
    console.log(id);
    return await post.findOne({where:{id},include:[{model:db.models.comments,as:"comments",attributes: ["id","comments"]}]})
}