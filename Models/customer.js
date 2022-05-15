var sequelize=require("../DB_Connection")
var DataTypes=require('sequelize')
var customer=sequelize.define("customer",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=customer
