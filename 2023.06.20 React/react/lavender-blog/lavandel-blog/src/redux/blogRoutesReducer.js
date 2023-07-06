import { createSlice } from "@reduxjs/toolkit";
import Login from '../Login/Login';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Blog from '../Blog/Blog';


export const blogRoutesReducer = createSlice({
    name: 'routes',
    initialState: {
        routes: [         
            {path:`/home/blog_${0}`, element: <> <Navigation/><Blog index={0}/></> },
            {path:`/home/blog_${1}`, element: <> <Navigation/><Blog index={1}/></> },
            {path:`/home/blog_${2}`, element: <> <Navigation/><Blog index={2}/></> },
        ]
    },
    reducers: {
        add: (state) => {
            state.blogs.push(
                {path:`/home/blog_${state.routes.length}`, element: <> <Navigation/><Blog index={state.routes.length}/></> }
            ) 
        },
        remove: (state, index) => {
            state.blogs = [
                ...state.blogs.slice(0, index.payload),
                ...state.blogs.slice(index.payload + 1)
            ]
        }, 
        update: (state, obj) => {
            let index = obj.payload.index;
            let newBlog = obj.payload.new;
            let blogs = [... state.blogs];
            blogs[index] = newBlog;
            state.blogs = blogs;
        }
    }
});

export const { push, remove, update } = blogRoutesReducer.actions;
export default blogRoutesReducer.reducer;
