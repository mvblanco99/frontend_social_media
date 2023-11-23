import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchAllPosts', 
    async () => {
        const res = await fetch('http://localhost/api/?categoria=posts&accion=all_posts')
        const data = await res.json()
        return data
    }
)

export const addNewPost = createAsyncThunk('posts/addNewPost',
    async (dataPost) => {

        const body = {
            method : 'POST',
            body : JSON.stringify(dataPost),
            headers : { 'Content-Type': 'application/json' }
        }

        try {
            const res = await fetch('http://localhost/api/?categoria=posts&accion=add_post',body)
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState = {
    posts: [],
    status : 'idle',   
}

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status='succeeded'
            state.posts.push(...action.payload.success)
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            state.posts = [...state.posts, action.payload]
        })
        .addCase(addNewPost.rejected,(state,action) =>{
            console.log(action.payload)
        })
    }
})

export default postsSlice.reducer;