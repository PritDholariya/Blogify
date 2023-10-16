import React from "react";
import { useState } from "react";
import { useContext } from 'react';
import { Link, useParams } from "react-router-dom";

import { UserContext } from '../UserContext';
import axios from "axios";
import DisplayComment from "./displayComment";

export default function BlogComment(){
    const [comment, setComment] = useState('');
    // const [responsedata, setResponsedata] = useState([]);
    const {user} = useContext(UserContext);
    const {id} = useParams();

    var userid = user.id;
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!comment) {
      alert('Please enter a comment.');
      return;
    }
    // console.log(id);    
    // console.log(userid);

    try {
      // Send the comment to the server
      const response = await axios.post('/blog/comment', {
        userid,
        comment,
        id
      });
      // setResponsedata(response.data);
      if (response.status === 200) {
        alert('Comment submitted successfully.');
        setComment('');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('An error occurred while submitting the comment.');
    }
    
  };

  return (
    <div >
      <h2 className="text-2xl mb-5">Discuss</h2>
      <form onSubmit={handleSubmitComment}>
        <div className="max-w mx-auto">
          <textarea
            className=" p-2 max-w w-full h-24  mx-auto"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment here"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="w-52 primary">Submit Comment</button>
        </div>
      </form>
      <DisplayComment></DisplayComment>
      {/* <div>
      {console.log(responsedata.length)}
      {responsedata > 0 &&
              responsedata.map((comment,index) => <DisplayComment {...responsedata} key = {responsedata.id} />)}
            
      </div> */}
    </div>
  );
}
