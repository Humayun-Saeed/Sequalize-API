var sequelize=require("../DB_Connection")
var DataTypes=require('sequelize')
var post=require('../Models/post')
const comments=sequelize.define("comments",
{
    comments:{type:DataTypes.STRING,
    allowNull:true
}
})
module.exports=comments
post.hasMany(comments,{as:"comments",foreignKey:'id'})
comments.belongsTo(post,{as:"post",targetKey:'id'})

