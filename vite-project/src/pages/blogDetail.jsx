import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { format } from 'date-fns';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import BlogComment from "./blogComment";

export default function BlogDetail() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const {user} = useContext(UserContext);


  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`/blog/${id}`);
        setPostInfo(response.data); // Set postInfo with the response data
      } catch (error) {
        console.error('Display failed', error);
        // Handle the error or show an error message to the user
      }
    }
    fetchDetail();
  }, [id]);

  if (!postInfo) {
    return null; // Return null or another component if data is loading
  }

    return(
        <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center my-4">
        {postInfo.title}
      </h1>
      <div className="text-gray-600 text-center">
        <p>By {postInfo.author.username}</p>
        <time>
          {format(new Date(postInfo.timestamp), 'MMM d, yyyy HH:mm')}
        </time>
      </div>
      
      <div>
        {user.id === postInfo.author._id && (
            <div>
                <Link to={`/edit/${postInfo._id}`}
                  className="bg-primary absolute  right-20 h-17 w-35 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"

                >Edit this Post</Link>
            </div>
        )}
      </div>
      <p className="text-xl my-6">
        {postInfo.short_description}
      </p>
      <div className="flex justify-center">
        <img
        // src={postInfo.thumbnail}
        src={postInfo.thumbnail}
        alt={postInfo.title}
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-6 text-lg leading-relaxed">
        {postInfo.content}
      </div>
      <div className="mt-7">
        <BlogComment></BlogComment>
      </div>
    </div>
    );
}