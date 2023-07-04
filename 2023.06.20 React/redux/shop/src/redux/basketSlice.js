import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        value: []
    },
    reducers: {
        push: (state, element) => {
            state.value.push(element);
        },
        remove: (state, index) => {
            state.value.splice(index, 1);
        }
    }
});

export const { push, remove } = basketSlice.actions;
export default basketSlice.reducer;