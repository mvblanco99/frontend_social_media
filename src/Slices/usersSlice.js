import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {},
    status : 'idle',
}

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUser : (state,action) => {
            state.user = action.payload;
        },
        clearData : (state) => {
            state.user = {}
            state.status = 'idle'
        }
    } 
})

export default userSlice.reducer
export const { addUser, clearData } = userSlice.actions
 