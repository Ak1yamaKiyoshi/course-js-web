import { createSlice } from "@reduxjs/toolkit";

export const adminReducer = createSlice({
    name: 'admins',
    initialState: {
        admins: []
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

export const { push, remove } = adminReducer.actions;
export default adminReducer.reducer;