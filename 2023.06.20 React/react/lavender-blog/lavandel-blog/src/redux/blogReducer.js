import { createSlice } from "@reduxjs/toolkit";

export const blogsReducer = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [    {
        title: "Bananas",
        content: "їстівний фрукт, за біологічним типом — ягода, що отримується з культивованих видів роду Банан. Як правило це: Musa acuminata та Musa × paradisiaca, а також Musa balbisiana, Musa fehi, Musa troglodytarum та ряд інших.",
        author: "wikipedia",
        date: "today",
    }, {
        title: "Quantum AI",
        content: "Google Quantum AI is advancing the state of the art of quantum computing and developing the tools for researchers to operate beyond classical capabilities.",
        author: "google",
        date: "today",
    }, {
        title: "My Cool Title",
        content: "Cool content",
        author: "Me",
        date: "today",
    }, {
        title: "MTest",
        content: "Testt",
        author: "Test",
        date: "Test",
    }, 
        
        ]
    },
    reducers: {
        push: (state, element) => {
            state.blogs.push(element.payload);
        },
        remove: (state, index) => {
            state.blogs = [
                ...state.blogs.slice(0, index.payload),
                ...state.blogs.slice(index.payload + 1)
            ]
        }, 
        update: (state, obj) => {
            /*
            let obj = {
                index: index,
                new: {
                    title: title,
                    content: content,
                    author: author,
                    date:date
                }
            }
        */
            let index = obj.payload.index;
            let newBlog = obj.payload.new;
            let blogs = [... state.blogs];
            blogs[index] = newBlog;
            state.blogs = blogs;
        }
    }
});

export const { push, remove, update } = blogsReducer.actions;
export default blogsReducer.reducer;
