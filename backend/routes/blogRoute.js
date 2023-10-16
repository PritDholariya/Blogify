const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// GET all blogs
router.get('/', blogController.getBlogs);

//Get my blogs
router.get('/myblogs/:id', blogController.getMyBlogs);

// GET a single blog
router.get('/:id', blogController.getBlog);

// POST a new blog
router.post('/', blogController.createBlog);

//POST a comment
router.post('/comment', blogController.postComment);

//get a comment
router.get('/comment/:id', blogController.getComment);

// DELETE a blog
// router.delete('/:id', blogController.deleteBlog);

// UPDATE a blog
router.patch('/:id', blogController.updateBlog);

module.exports = router;
