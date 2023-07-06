import React from "react";
import { push, remove } from "../redux/blogReducer";
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";


export default function Home() {

    const blogs =    useSelector((state) => state.blogs.blogs);
    const isLogged = useSelector((state) => state.admins.isAdminLogged);
   
    return (
        <div className="home-outer-container">
            { (isLogged) ? <h1> Logged as admin </h1> : <></>}
            <h1> Home </h1>
            <div className="menu-blogs-container">
            
            <Blog blog={blogs[0]}/> 
           
            



            </div> 
        </div>
    );
}
