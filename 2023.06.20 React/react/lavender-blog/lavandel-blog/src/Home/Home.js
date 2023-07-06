import React from "react";
import { push, remove } from "../redux/blogReducer";
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Routes,  useSearchParams } from "react-router-dom";
import Blog from "../Blog/Blog";
import Miniblog from "../Miniblog/Miniblog";
import add from "../redux/blogRoutesReducer"

export default function Home() {
    const blogs =    useSelector((state) => state.blogs.blogs);
    const isLogged = useSelector((state) => state.admins.isAdminLogged);
    const dispatch = useDispatch();
    
    const [searchParams] = useSearchParams();
    function createQuery(index) {
        console.log(index)
        return `/home/blog?index=${index}`
    }

    return (
        <div className="home-outer-container">
            { (isLogged) ? <h1> Logged as admin </h1> : <></>}
            <h1> Home </h1>
            <div className="menu-blogs-container">
            {blogs.map(e => (
                <Miniblog index={blogs.indexOf(e)}/>
            ))}
            <button onClick={() => { dispatch(add); }}> </button>
            </div> 
        </div>
    );
}
