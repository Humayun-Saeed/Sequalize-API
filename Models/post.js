var sequelize=require("../DB_Connection")
var DataTypes=require('sequelize')
const post=sequelize.define("post",{
    name:{type:DataTypes.STRING,
    allowNull:true,
},
author:{
type:DataTypes.STRING,
allowNull:true
}

})
module.exports=post