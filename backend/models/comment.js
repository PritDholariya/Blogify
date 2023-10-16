const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new mongoose.Schema({
    comment_details : {type:String, required:true},
    userid: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    blogid: {type:mongoose.Schema.Types.ObjectId, ref: 'BlogPost'},
}, {timestamps : true});
    
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
