var perosn=require('../Models/person')
var db=require('../DB_Connection')
module.exports.add_person=async({name,age})=>{

return await perosn.create({name,age})

}
module.exports.get_person=async(id)=>{
    console.log(id);
    return await perosn.findByPk(id,{ include:["car"]})
}