import { createSlice } from "@reduxjs/toolkit";

export const blogsReducer = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [    {
        title: "sometitle",
        content: "sontent",
        author: "author",
        date: "String date",
    }
        
        ]
    },
    reducers: {
        push: (state, element) => {
            state.blogs.push(element);
        },
        remove: (state, index) => {
            state.blogs = [
                ...state.blogs.slice(0, index.payload),
                ...state.blogs.slice(index.payload + 1)
            ]
        }, 
        update: (state, index, newBlog) => {
            console.log( index, newBlog )
            state.blogs[index] = newBlog;
        }
    }
});

export const { push, remove, update } = blogsReducer.actions;
export default blogsReducer.reducer;
