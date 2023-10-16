const mongoose = require('mongoose');
const Data = require('../models/user');
const BlogPost = require('../models/blog');
const  Comment  = require('../models/comment');

// //get all blogs
const getBlogs = async(req,res) =>{
    try {
        const posts = await BlogPost.find().populate('author',['username'])
        .sort({timestamp:-1})
        .limit(20); // Use your BlogPost model to retrieve posts
        // console.log(posts);
        res.json(posts);
      } catch (error) {
        console.error('Failed to retrieve blog posts:', error);
        res.status(500).json({ error: 'Failed to retrieve blog posts' });
      }
};
//get my blogs
const getMyBlogs = async (req, res) => {
  try {
    const { id } = req.params; // Ensure "id" is correctly extracted from req.params
    if (!id) {
      return res.status(400).json({ error: 'User ID is missing' });
    }
    // Retrieve blogs created by the current user
    const myBlogs = await BlogPost.find({ author: id })
      .sort({ timestamp: -1 })
      .limit(20);
    res.json(myBlogs);
  } catch (error) {
    console.error('Failed to retrieve user-specific blog posts:', error);
    res.status(500).json({ error: 'Failed to retrieve user-specific blog posts' });
  }
};




// //get single blog
const getBlog = async(req,res) =>{
    const {id} = req.params;
    const postDoc = await BlogPost.findById(id).populate('author',['username']);
    res.json(postDoc);
};

//post comment
const postComment = async (req, res) =>{
  const {id, userid, comment} = req.body;

  try {
    const commentdoc = await Comment.create({
      comment_details: comment,
      userid:userid,
      blogid:id,
    });
    // console.log(postdoc);
    res.json(commentdoc);
  } catch (e) {
    console.log(e);
    res.status(422).json({ error: "Failed to create post", details: e.message });
  }

}
//display comment
const getComment = async(req,res) =>{
  // console.log("you are in the backend");
  // res.json("okk");
  const {id} = req.params;
  const query = { blogid: id };

    const commentDoc = await Comment.find(query).populate('userid',['username']);
    res.json(commentDoc);
  // try {
  //   const comments = await Comment.find()
  //   .sort({timestamp:-1}); // Use your BlogPost model to retrieve posts
  //   // console.log(posts);
  //   res.json(comments);
  // } catch (error) {
  //   console.error('Failed to retrieve blog posts:', error);
  //   res.status(500).json({ error: 'Failed to retrieve blog posts' });
  // }
}
//create a new blog
const createBlog = async (req, res) => {
    const { title,description ,content,image, email} = req.body;
    // const image = req.files.image; // This will contain information about the uploaded image
    // console.log(email);
    // console.log(image.name);
    //why this is not working
//     const userEmail = req.session.email; // Ensure you are using the correct session key
//   console.log(userEmail);
    // if (email) {
      const userData = await Data.findOne({ email });
  
    //   if (userData) {
    //     console.log(userData);
    //     // Handle creating the blog post using the retrieved user data and blog details.
    //   } else {
    //     console.log('No user data found for the current user.');
    //     // Handle this case appropriately, e.g., send an error response.
    //   }
    // } else {
    //   console.log('User email not found in the session.');
    //   // Handle this case appropriately, e.g., send an error response.
    // }


    try {
        const postdoc = await BlogPost.create({
          title,
          short_description: description,
          content,
          author : userData._id,
          thumbnail: image,
        });
        // console.log(postdoc);
        res.json(postdoc);
      } catch (e) {
        console.log(e);
        res.status(422).json({ error: "Failed to create post", details: e.message });
      }

  };
  

// //update blog
const updateBlog = async (req, res) => {
    const { id, title, content, description } = req.body;
  
    try {
      // Find the blog post by its ID
      const postDoc = await BlogPost.findById(id);
  
      if (!postDoc) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
  
      // Update the blog post fields
      postDoc.title = title;
      postDoc.short_description = description;
      postDoc.content = content;
  
      // Save the updated post
      await postDoc.save();
  
      res.json(postDoc);
    } catch (error) {
      console.error('Failed to update blog post:', error);
      res.status(500).json({ error: 'Failed to update blog post' });
    }
  };

// //delete
// const deleteBlog = async(req,res) =>{

// };
const blogController = {
    getBlogs,
    getBlog,
    createBlog,
    // deleteBlog,
    updateBlog,
    getMyBlogs,
    postComment,
    getComment
  }
module.exports = blogController;
