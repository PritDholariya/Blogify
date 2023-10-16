import React from "react";
import { useState,useEffect } from "react";
import { useContext } from 'react';
import { Link, useParams } from "react-router-dom";

import { UserContext } from '../UserContext';
import axios from "axios";
import Comment from "./comments";

export default function DisplayComment() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Send the ID as a query parameter
        const response = await axios.get(`/blog/comment/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Display failed', error);
        // Handle the error or show an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <main className="">
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </main>
  );
}

  

