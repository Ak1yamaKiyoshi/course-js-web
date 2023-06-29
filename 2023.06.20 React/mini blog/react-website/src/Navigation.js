import React from 'react';
import "./Navigation.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
  } from "react-router-dom";
import { Rotate as Hamburger } from 'hamburger-react'

function Navigation() {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <div className='nav-container'> 
            <div className='hamburgerMenu'>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            {  (isOpen) 
            ? (
            <div className='nav-menu'> 
                <a href='/nav'> Nav </a>
                <a href='/home'> Home </a>
                <a href='/blog'> Blog </a>
            </div>) 
            : (<></>)}
        </div>
    )
}

export default Navigation;
