import React from 'react';
import { useContext } from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';


export default function PostBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const {user} = useContext(UserContext);


  const handleImageChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    }
  };
  
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Create a FormData object to send the data as a multipart form
      // const formData = new FormData();
      // formData.append('title', title);
      // formData.append('content', content);
      // formData.append('image', image);
      console.log(image);

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('content', content);
      formData.append('image', image);
      formData.append('email',user.email);

    try {
      // Send the Data to the server to create a new blog post
      const response = await axios.post('/blog',formData,{
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setRedirect(true);
      //   {
          //     title,
          //     content,
          //     image,
          //     email: user.email,
          //   }
        if (response.status === 200) {
              alert('Blog post created successfully');
              // Optionally, you can redirect to a different page after successful submission
        }
    } catch (error) {
      console.error('Error creating the blog post:', error);
      alert('An error occurred while creating the blog post');
    }

};
    if(redirect){
        return <Navigate to={'/'} />
    }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center my-2">Create a New Blog Post</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            rows="4" // Increase the number of rows
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ border: '1px solid #ccc', width: '100%', padding: '8px' }} // Add styling here
          />
          <textarea
            placeholder="Blog Content"
            rows="6" // Increase the number of rows
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ border: '1px solid #ccc', width: '100%', padding: '8px' }} // Add styling here
          />
          <input
            type="file"
            // accept="image/*"
            alt='image'
            name="image"
            onChange={handleImageChange}
          />
          {image  &&<img
            src={image}
          /> }
          

          <button type="submit" className="primary">
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}
