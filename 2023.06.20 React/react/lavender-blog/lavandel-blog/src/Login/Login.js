import React from "react";
import { push, remove } from "../redux/blogReducer";


export default function Login() {
    return (<>
        <h1> Login </h1>
        <div> 
            <div>
                <p> Username </p>
                <input/>
            </div>
            <div>
                <p> Password </p>
                <input/>
            </div>
            <button> Submit </button>
            <button> Not admin </button>
        </div>

    </>);
}