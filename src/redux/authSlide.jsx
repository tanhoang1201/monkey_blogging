import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../configs/firebase.config";

const authSlide = createSlice({
	name: "auth",
	initialState: {
		userLogin: null,
		loading: false,
		// error: "",
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.userLogin = action.payload;
				state.loading = false;
			})
			.addCase(login.rejected, (state, action) => {
				toast.warn(action.error.message);
				state.loading = false;
			})
			.addCase(logout.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.userLogin = action.payload;
				state.loading = false;
			})
			.addCase(logout.rejected, (state, action) => {
				console.log(action);
			});
	},
});

export const login = createAsyncThunk("login", async ({ values, navigate }) => {
	const res = await signInWithEmailAndPassword(auth, values.email, values.password);
	toast.success("Login successful!!!", { icon: "🧐" });
	navigate("/");
	return { email: res.user.email, name: res.user.displayName, accessToken: res.user.accessToken };
});

export const logout = createAsyncThunk("logout", async () => {
	await signOut(auth);
	toast.info("Logout successful!!!", { icon: "👍" });
	return null;
});

const authReducer = authSlide.reducer;
export default authReducer;
