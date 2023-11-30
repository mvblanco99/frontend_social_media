import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { client } from '../api/client'


export const login = createAsyncThunk('users/fetchUser',
    async ({dataUser}) => {
        const response = await client.post('http://localhost/api/?categoria=login&accion=login', dataUser)
        return response.data
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
        builder.addCase(login.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status='succeeded'

            console.log(action.payload)
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
 