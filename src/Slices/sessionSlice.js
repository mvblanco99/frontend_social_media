import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isCookies : false
}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers : {
        setIsCookie : (state , action) =>{
            state.isCookies=action.payload;
        }


    }
})

export default sessionSlice.reducer
export const {setIsCookie} = sessionSlice.actions