var comment=require('../Models/comments')

module.exports.add_comments=async({comments,postID})=>{
    return await comment.create({comments,postID})
}
