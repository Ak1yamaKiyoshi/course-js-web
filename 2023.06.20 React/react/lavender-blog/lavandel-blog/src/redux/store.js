import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blogReducer'
import adminReducer from './adminReducer'


export default configureStore({
  reducer: {
    blogs: blogReducer,
    admins: adminReducer
  },
})