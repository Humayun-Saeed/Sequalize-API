var sequelize=require("../DB_Connection")
var car=require('../Models/car')
var DataTypes=require('sequelize')

var person=sequelize.define("person",{
name:{
    type:DataTypes.STRING,
    allowNull:false
},
age:{
type:DataTypes.NUMBER,
allowNull:false
},


})
// person.hasMany(car,{as:"car"})
// car.belongsTo(person,{as:"person",targetKey:"id"})

person.hasOne(car,{as:"car",foreignKey:"carid"})
car.belongsTo(person,{as:"person",targetKey:"id"})
module.exports=person