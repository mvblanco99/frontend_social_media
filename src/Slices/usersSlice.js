import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
import { client } from '../api/client';

export const login = createAsyncThunk('users/fetchUser/login',
    async ({dataUser}) => {
        const response = await client.post('http://localhost/api/?categoria=session&accion=login', dataUser)
        return response.data
    }
)

export const logout = createAsyncThunk('users/fetchUser/logout',
    async ({username}) => {
        const response = await client.post('http://localhost/api/?categoria=session&accion=logout', username)
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
        },
        clearData : (state) => {
            state.user = {}
            state.status = 'idle'
        }
    },
    extraReducers : (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status='succeeded'

            if(action.payload.success != undefined){

                //recupero el token
                const { auth_token } = action.payload.success

                //decodifico el token
                const encoded = jwtDecode(auth_token)

                const { expires, data_user } = encoded

                //Guardar el token en la cookie
                const cookies = new Cookies();
                cookies.set('cookie_api_social_media_session',auth_token, { maxAge : 30 })
                
                //Guardar datos en la store
                state.user = data_user

            }else{
                console.log(action.payload.error)
            }
        })
        .addCase(login.rejected, (state) =>{ 
            console.log("error en peticion")
        }) 
        .addCase(logout.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(logout.fulfilled, (state, action)=>{ 
            if(action.payload.success == 1){
                state.status="succeeded";
                const cookies = new Cookies();
                cookies.remove('cookie_api_social_media_session');
            }
        })
    } 
})

export default userSlice.reducer
export const { addUser, clearData } = userSlice.actions
 