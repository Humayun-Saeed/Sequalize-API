var sequelize=require("../DB_Connection")
var DataTypes=require('sequelize')

var admin=sequelize.define("admin",{
name:{
    type:DataTypes.STRING,
    allowNull:false
},
age:{
type:DataTypes.NUMBER,
allowNull:false
},


})
module.exports=admin