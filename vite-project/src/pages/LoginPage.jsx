import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from '../UserContext';


export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
          const {data} = await axios.post('/login', {email,password});
          setUser(data);
          alert('Login successful');
          setRedirect(true);
        } catch (e) {
          alert('Login failed');
        }
      }

    if(redirect){
      return <Navigate to={'/'} />
    }
    
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center my-2">Log In</h1>
            <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                <input type="email" placeholder="your@email.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="your password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Log In</button>
                <div className='text-center text-gray-500'>
                    Don't have an account, yet?
                    <Link to={'/register'} className='underline'>Register Now</Link>
                </div>
            </form>

            </div>
            
        </div>
    );

}