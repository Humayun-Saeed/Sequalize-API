var sequelize=require("../DB_Connection")
var DataTypes=require('sequelize')
const car=sequelize.define("car",{
name:{
    type:DataTypes.STRING,
    allowNull:true
},
color:{
    type:DataTypes.STRING,
    allowNull:false
}

})
module.exports=car