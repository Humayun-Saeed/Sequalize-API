var sequelize=require("../DB_Connection")
var DataTypes=require('sequelize')
var admin=require('../Models/admin')
var customer=require('../Models/customer')
var user=sequelize.define("user",{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM(0,1),
        allowNull:false,
    },
    user_id:{
        type:DataTypes.NUMBER,
        allowNull:false
    }
    
})
user.hasMany(customer,{as:"customer",foreignKey:"id"})
customer.belongsTo(user,{as:"user",targetKey:"id"})
admin.hasOne(user,{as:"user",foreignKey:"id"})
user.belongsTo(admin,{as:"admin",targetKey:"id"})
module.exports=user