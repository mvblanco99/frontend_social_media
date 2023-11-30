import { configureStore } from '@reduxjs/toolkit'
import  postsSlice  from '../Slices/postsSlice'
import  usersSlice from '../Slices/usersSlice'
import sessionSlice from '../Slices/sessionSlice'

export const store = configureStore({
    reducer : {
        posts : postsSlice,
        users : usersSlice,
        session: sessionSlice
    }
})