import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  BrowserRouter
} from "react-router-dom";
import Blog from './Blog/Blog.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  
  </React.StrictMode>
);

