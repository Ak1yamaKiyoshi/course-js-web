import { createSlice } from "@reduxjs/toolkit";

export const blogsReducer = createSlice({
    name: 'blogs',
    initialState: {
        blogs: []
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
        }
    }
});

export const { push, remove } = blogsReducer.actions;
export default blogsReducer.reducer;