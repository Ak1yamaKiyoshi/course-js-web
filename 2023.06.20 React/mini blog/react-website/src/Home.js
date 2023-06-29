import React from 'react';
import "./Navigation.css"
import Post from './Post';
import { Rotate as Hamburger } from 'hamburger-react'
import { posts } from './App'
import Navigation from './Navigation';
import './Home.css'

function Home() {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <div>
            <Navigation></Navigation>
            <div className="home-container">
            <h1> This is some blog </h1>
            <p> loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem   </p>
            </div>

        </div>
    )
}

export default Home;
