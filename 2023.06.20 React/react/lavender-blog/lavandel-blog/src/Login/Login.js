import React from "react";
import { push, remove } from "../redux/blogReducer";
import './Login.css'
import { Link } from "react-router-dom";


export default function Login() {

    function handleLoginClick(e) {
        console.log('a')
    }

    return (<div className="login-outer-container">
        <div className="login-inner-container"> 
        <h1> Sign up </h1>
        <p> Username </p>
        <input/>
        <p> Password </p>
        <input/>
        <h2 onClick={handleLoginClick}> login </h2>
        <Link to="/home"> 
            <h3>  Not admin </h3>
        </Link>
        </div>
    </div>);
}