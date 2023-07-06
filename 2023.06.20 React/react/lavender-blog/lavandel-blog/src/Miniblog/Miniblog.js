import React from "react";

import './Miniblog.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import jquery from "jquery";
import { useNavigate } from "react-router-dom";

export default function Miniblog({blog}) {
    const navigate = useNavigate();
    /* Blog

 def
    {
        title: "sometitle",
        content: "sontent",
        author: "author",
        date: "String date",
    }
    */

	return(
 	<div className="miniblog-outer-container"> 
	    <div className="miniblog-inner-container"> 
              <div className="miniblog-heading-container"> 
             	<h1> {blog.title} </h1>
                <h2> by {blog.author} </h2>
                <h3> {blog.date} </h3>
              </div>
              <div className="article"> 
                <p> {blog.content} </p>
              </div> 
            </div>
        </div>
	)
}
