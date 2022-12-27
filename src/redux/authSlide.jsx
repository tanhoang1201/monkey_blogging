import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../configs/firebase.config'

const authSlide = createSlice({
    name: 'auth',
    initialState: {
        userLogin: null,
        loading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.userLogin = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(login.rejected, (state, action) => {
                state.error = true
            })
    },
})

export const login = createAsyncThunk('login', async (userInfo, navigate) => {
    try {
        const res = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        // navigate('/')
        toast.success('Login successful!!!', { icon: '🧐' })
        return res.user
    } catch (error) {
        // console.log(error)
        toast.warn(error.code, { icon: '😢' })
    }
})

const authReducer = authSlide.reducer
export default authReducer
