import { Link } from 'react-router-dom';

export default function LoginPage(){
    
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center my-2">Log In</h1>
            <form className="max-w-md mx-auto">
                <input type="email" placeholder="youremail@gmail.com" />
                <input type="password" placeholder="your password" />
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