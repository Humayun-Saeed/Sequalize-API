var comment=require('../services/comments')

module.exports.add_commets=async(req,res)=>{
    const data=await comment.add_comments(req.body)
    res.json(data)
}