import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Post from './Post'; // Assuming you have a component named Post
import { UserContext } from '../UserContext';

export default function MyBlogPage() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure that user.id is defined and not 'undefined' before making the request
        if (user && user.id) {
          const response = await axios.get(`/blog/myblogs/${user.id}`); // Adjust the endpoint
          setPosts(response.data);
        } else {
          // Handle the case where user.id is not defined
          console.error('User ID is undefined');
        }
      } catch (error) {
        console.error('Display failed', error);
        // Handle the error or show an error message to the user
      }
    };

    fetchData();
  }, [user]);

  return (
    <main className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
      {console.log(posts.length)}
      {posts.length > 0 &&
        posts.map((post, index) => (
          <Post key={post.id} {...post} index={index} />
        ))}
    </main>
  );
}
