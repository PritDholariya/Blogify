import React from 'react';
import { useContext } from 'react';
import { Link,Navigate, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';


export default function EditBlog(){
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [postInfo, setPostInfo] = useState(null);
    const [image, setImage] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const {user} = useContext(UserContext);

    const handleImageChange = (e) => {
        // Handle the image selection here
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
      };

      useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await axios.get(`/blog/${id}`);
            setTitle(response.data.title); // Set postInfo with the response data
            setContent(response.data.content);
            setDescription(response.data.short_description);
            // setImage(response.data.thumbnail);
          } catch (error) {
            console.error('Display failed', error);
            // Handle the error or show an error message to the user
          }
        }
        fetchDetail();
      }, []);
      const updatePost = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content);
        formData.append('id',id);
        if(image?.[0])
            formData.append('image', image);

        formData.append('email',user.email);

        try {
            // Send the Data to the server to create a new blog post
            const response = await axios.patch(`/blog/${id}`,formData,{
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.status === 200) {
                    setRedirect(true);
                    alert('Blog post created successfully');
                    // Optionally, you can redirect to a different page after successful submission
              }
          } catch (error) {
            console.error('Error creating the blog post:', error);
            alert('An error occurred while creating the blog post');
          }
      }  
    
     if(redirect){
        return <Navigate to={`/post/${id}`} />
    }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center my-2">Edit a Blog Post</h1>
        <form className="max-w-md mx-auto" onSubmit={updatePost} encType="multipart/form-data">
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
            accept="image/*"
            alt='image'
            name="image"
            onChange={handleImageChange}
          />

          <button type="submit" className="primary">
            Edit Blog
          </button>
        </form>
      </div>
    </div>
  );
}