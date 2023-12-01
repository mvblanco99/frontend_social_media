import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from '../api/client'

export const fetchPosts = createAsyncThunk('posts/fetchAllPosts', 
    async () => {
        const res = await client.get('http://localhost/api/?categoria=posts&accion=all_posts')
        return res.data
    }
)

export const addNewPost = createAsyncThunk('posts/addNewPost',
    async (dataPost) => {
        const response = await client.post('http://localhost/api/?categoria=posts&accion=add_post', dataPost)
        return response.data
    }
)

const initialState = {
    posts: [],
    status : 'idle',   
}

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        clearDataPosts : (state) => {
            state.posts = [],
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status='succeeded'
            state.posts.push(...action.payload.success)
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            state.posts = [...state.posts, action.payload.success]
        })
        .addCase(addNewPost.rejected,(state,action) =>{
            console.log(action.payload)
        })
    }
})

export default postsSlice.reducer;
export const { clearDataPosts } = postsSlice.actions