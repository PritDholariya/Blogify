import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import { Link, Navigate, useParams } from "react-router-dom";
import IndexPage from "./IndexPage";
import MyBlogPage from "./myBlogPage";

export default function AccountPage(){
    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);
    // console.log(UserContext.value.user)
    let {subpage} = useParams();
   

    async function logout(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if(!ready)
        return 'Loading...';

    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }

    if(subpage === undefined)
        subpage = 'profile';
    //if we don't write above condition
    // function LinkClasses(type = null){
    //     let classes = 'py-2 px-6';
    //     if(subpage === type || (subpage ===undefined && type === 'profile'))
    //         classes += ' bg-primary text-white rounded-full';
    //     return classes;

    // }
    function LinkClasses(type = null){
        let classes = 'py-2 px-6';
        if(subpage === type)
            classes += ' bg-primary text-white rounded-full';
        return classes;

    }

    if(redirect){
        return <Navigate to={redirect}/>
    }
    
    return(
        <>
        <nav className="w-full flex justify-center mt-8 gap-2 font-medium">
            <Link className={LinkClasses('profile')} to={'/account'}>My Profile</Link>
            <Link className={LinkClasses('myblogs')} to={'/account/myblogs'}>My Blogs</Link>
            <Link className={LinkClasses('saved')} to={'/account/saved'}>Saved Blog</Link>

        </nav>
        {subpage === 'profile' && (
            <div className="text-center my-5 font-semibold p-6">
                <div className="mb-5">
                Logged in as {user.username} with email-id ({user.email})
                </div>
                <button onClick={logout} className="primary max-w-sm mt-6">LogOut</button>
            </div>
            
        )}
        {subpage === 'myblogs' && (
            <MyBlogPage></MyBlogPage>
        )}
        </>
    );
}