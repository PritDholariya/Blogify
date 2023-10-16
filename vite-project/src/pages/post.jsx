import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function Post({ _id,title, short_description, content, thumbnail, author, username, timestamp }) {
// const thumbnailSrc = `data:image/jpg;base64,${thumbnail.toString('base64')}`;
// console.log(thumbnail)
const img = thumbnail;
  return (
    <div className="h-full sm:w-1/8 md:w-1/9 p-4">
      <div className="bg-white h-full rounded-lg shadow-lg overflow-hidden">
        
        <img
        src={img}
        // src={`data:image/jpeg;base64,${thumbnail}`}
        // src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H"

        // src={thumbnailSrc}
        className=" w-full h-48 object-cover" />
        <div className="px-3 text-xl font-semibold mb-2">
          {author.username}
        </div>
        <time className="px-3 text-gray-500">
          {format(new Date(timestamp), 'MMM d, yyyy HH:mm')}
        </time>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            {short_description}
          </p>
          <Link
            to={`/post/${_id}`} // Replace with the actual article link
            className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}



// src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H"
// const thumbnailSrc = `data:image/jpg;base64,${thumbnail.toString('base64')}`;
        // src={thumbnailSrc}
