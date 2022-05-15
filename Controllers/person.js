var person=require('../services/person')
module.exports.add=async(req,res)=>{

    await person.add_person(req.body)

}
module.exports.get=async(req,res)=>{

const data=await person.get_person(req.body.id)
res.json(data)
}
