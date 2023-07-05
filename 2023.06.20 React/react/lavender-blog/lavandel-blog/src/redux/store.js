import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blogReducer'


export default configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer
  },
})