import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";


export const fetchUser = createAsyncThunk('users/fetchUser',
    async ({dataUser}) => {
        
        const body = {
            method : 'POST',
            headers : { 'Content-Type': 'application/json' },
            body : JSON.stringify(dataUser)   
        }

        try {
            const response = await fetch('http://localhost/api/?categoria=login',body);
            const data = await response.json()
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)

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
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.status='succeeded'

            if(action.payload.success != undefined){

                //recupero el token
                const { auth_token } = action.payload.success

                //decodifico el token
                const encoded = jwtDecode(auth_token)

                const { expires, data_user } = encoded

                //Guardar el token en la cookie
                Cookies.set('cookie_api_social_media_session',auth_token, { expires } )
                
                //Guardar datos en la store
                state.user = data_user

            }else{
                console.log(action.payload.error)
            }
        })  
    } 
})

export default userSlice.reducer
export const { addUser } = userSlice.actions
 