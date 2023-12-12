import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../api/client';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

const cookies = new Cookies();

export const login = createAsyncThunk('session/login',
  async ({dataUser}) => {
    const response = await client.post('http://localhost/api/?categoria=session&accion=login', dataUser);
    return response.data;
  }
);

export const logout = createAsyncThunk('session/logout',
  async ({username}) => {
    const response = await client.post('http://localhost/api/?categoria=session&accion=logout', username);
    return response.data;
  }
);

const initialState={
  isCookies : false,
  status : 'idle'
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers : {
    setIsCookie : (state , action) => {
      state.isCookies = action.payload;
      state.status = 'idle';
    }
  },extraReducers : (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(login.fulfilled, (state, action) => {
        state.status='succeeded';

        if(action.payload.success != undefined){

          //recupero el token
          const { auth_token } = action.payload.success;

          //decodifico el token
          const encoded = jwtDecode(auth_token);

          const { expires } = encoded;

          //Guardar el token en la cookie
          cookies.set('cookie_api_social_media_session', auth_token, { maxAge : expires });
                
          //Guardar datos en la store
          state.isCookies = true;

        }else{
          console.log(action.payload.error);
        }
      })
      .addCase(login.rejected, () =>{ 
        console.log('error en peticion');
      }) 
      .addCase(logout.pending, (state)=>{
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action)=>{ 
        if(action.payload.success == 1){
          state.status='succeeded';
          cookies.remove('cookie_api_social_media_session');
          state.isCookies = false;
        }
      });
  }
});

export default sessionSlice.reducer;
export const {setIsCookie} = sessionSlice.actions;