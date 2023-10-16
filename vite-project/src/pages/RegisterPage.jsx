import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    
  const handleFileInput = (e) => {
    console.log("clicked");
    const photoInput = e.target;
    const fileName = photoInput.files[0]?.name || 'Choose a photo';
    const fileNameDisplay = document.querySelector('.file-name-display');
    fileNameDisplay.textContent = fileName;
    console.log(fileName);

  };

  const openFileInput = () => {
    console.log("clicked open file");

    const fileInput = document.getElementById('file-input');
    // fileInput.click();
  };
  // function registerUser(ev){
  //   ev.preventDefault();
  //   axios.get('http://localhost:8080/register');
  // }
  const registerUser = async(event) => {
    event.preventDefault();
    // alert("The browser will not reload when the alert box is closed.");
    try{
      await axios.post('/register',{
        username,
        email,
        password,
      });
      alert("Registration successful, Now you can log in");  
    }catch (error) {
      if (error.response) {
          // The request was made, but the server responded with a status code other than 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an error
          console.log('Error', error.message);
      }
      console.log(error.config);
  }
    
};
  return (
    <div className="my-4 flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center my-2">Register yourself</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text" name="name" placeholder="Your Name"  className="mb-4 p-2 rounded" value={username} onChange={ev => setUsername(ev.target.value)}/>
          <input type="email" name="email" placeholder="youremail@gmail.com"  className="mb-4 p-2 rounded" value={email} onChange={ev => setEmail(ev.target.value)}/>
          <input type="password" name="password" placeholder="Your Password"  className="mb-4 p-2 rounded" value={password} onChange={ev => setPassword(ev.target.value)}/>
          {/* <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="mb-400 p-2 rounded"
          /> */}
            <div className='my-3'>       
            </div>
          {/* Custom file input */}
          <input
            type="file"
            id="file-input"
            name="photo"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileInput}
          />
          <label
            htmlFor="file-input"
            className="custom-file-input primary bg-blue-500  text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 mb-4"
            onClick={openFileInput}
          >
            Choose a photo
          </label>
          <span className="file-name-display ml-2 text-gray-500 mb-5">No file chosen</span>
            <div className='my-3'>       
            </div>
          <button type="submit" className="primary mt-100">
             Signup
          </button>
        </form>
      </div>
    </div>
  );
}

// import { Link } from 'react-router-dom';

// export default function RegisterPage() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can access the form values like this:
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirmPassword.value;
//     const photo = e.target.photo.files[0]; // Assuming you use <input type="file" name="photo" />

//     // Now you can do something with these values, like sending them to a server.
//   };

//   return (
//     <div className="mt-4 grow flex items-center justify-around">
//       <div className="mb-64">
//         <h1 className="text-4xl text-center my-2">Register yourself</h1>
//         <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="youremail@gmail.com" required />
//           <input type="password" name="password" placeholder="Your Password" required />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
//           <input type="file" name="photo" accept="image/*" />

//           <button type="submit" className="primary">
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { Link } from 'react-router-dom';

// export default function RegisterPage(){
//     return(
//         <div className="mt-4 grow flex items-center justify-around">
//             <div className="mb-64">
//             <h1 className="text-4xl text-center my-2">Register yourself</h1>
//             <form className="max-w-md mx-auto">
//                 <input type="text" placeholder="username" />
//                 <input type="email" placeholder="youremail@gmail.com" />
//                 <input type="password" placeholder="your password" />
//                 <input type="password" placeholder="confirm password" />

//                 <button className="primary">Signup</button>
                
//             </form>

//             </div>
            
//         </div>
//     );

// }