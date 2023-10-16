const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the author
    required: true,
  },
  thumbnail : {
    type:String,
    // required:true,
  },
  like : {
    type:Number,
     default : 0,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
  // You can add more fields as needed, such as tags, comments, etc.
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
