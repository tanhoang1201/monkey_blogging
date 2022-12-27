import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlide = createSlice({
	name: "auth",
	initialState: {},
	reducers: {},
});

const authReducer = authSlide.reducer;
export default authReducer;
