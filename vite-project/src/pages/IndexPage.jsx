import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'; // Assuming you have a component named Post

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/blog');
        setPosts(response.data);
      } catch (error) {
        console.error('Display failed', error);
        // Handle the error or show an error message to the user
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <main className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
      
      {posts.length > 0 &&
        posts.map((post,index) => (
        <Post key={post.id} {...post} index={index} />
        ))}
    </main>
  );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Header';

// export default function IndexPage(){
//     return(
//     <main>
//     <div className='max-w-6xl justify-center'>

//       <div className ="flex mx-4 my-4">
//         <div className="image">
//           <img src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H" alt = ""></img>
//         </div>
//         <div className = "mx-4 my-4 font-bold">
//           <h2>The Daily Dichotomies of Product Leadership</h2>
//           <p>Product leaders are empowered to take on a lot of responsibility for the feature, function or domain area assigned to them. Yet, it is far more common for Product Leaders to doubt their own capabilities and decision-making skills. Some reasons discussed previously</p>
//         </div>
//       </div>
//       <div className ="flex mx-4 my-4 ">
//         <div className="image">
//           <img src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H" alt = ""></img>
//         </div>
//         <div className = "mx-4 my-4 font-bold">
//           <h2>The Daily Dichotomies of Product Leadership</h2>
//           <p>Product leaders are empowered to take on a lot of responsibility for the feature, function or domain area assigned to them. Yet, it is far more common for Product Leaders to doubt their own capabilities and decision-making skills. Some reasons discussed previously</p>
//         </div>
//       </div>
//       <div className ="flex mx-4 my-4">
//         <div className="image">
//           <img src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H" alt = ""></img>
//         </div>
//         <div className = "mx-4 my-4 font-bold">
//           <h2>The Daily Dichotomies of Product Leadership</h2>
//           <p>Product leaders are empowered to take on a lot of responsibility for the feature, function or domain area assigned to them. Yet, it is far more common for Product Leaders to doubt their own capabilities and decision-making skills. Some reasons discussed previously</p>
//         </div>
//       </div>
      
//     </div>
//     </main>
//     );
// } 