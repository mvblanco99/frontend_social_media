import { configureStore } from '@reduxjs/toolkit'
import  postsSlice  from '../Slices/postsSlice'
import  usersSlice from '../Slices/usersSlice'

export const store = configureStore({
    reducer : {
        posts : postsSlice,
        users : usersSlice
    }
})