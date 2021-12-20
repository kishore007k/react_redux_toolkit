import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
	const response = await axios.post("https://fakestoreapi.com/auth/login", data);
	localStorage.setItem("token", response.data.token);
	return response.data.token;
});

const userReducer = createSlice({
	name: "user",
	initialState: {
		user: {},
		isLoggedIn: false,
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[loginUser.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
	},
});

export default userReducer.reducer;
