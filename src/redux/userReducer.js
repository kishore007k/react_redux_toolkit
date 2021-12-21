import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
	const response = await axios.post("https://fakestoreapi.com/auth/login", data);
	localStorage.setItem("token", response.data.token);
	return response.data.token;
});

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
	const response = await axios.get("https://fakestoreapi.com/users");
	return response.data;
});

export const getUser = createAsyncThunk("user/getUser", async (id) => {
	const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
	return response.data;
});

const userReducer = createSlice({
	name: "user",
	initialState: {
		users: [],
		user: {},
		token: null,
		isLoggedIn: false,
		isLoading: false,
		error: null,
	},
	extraReducers: {
		// Login User
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.token = action.payload;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[loginUser.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
		// Get all Users
		[getAllUsers.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllUsers.fulfilled]: (state, action) => {
			state.users = action.payload;
			state.isLoading = false;
		},
		[getAllUsers.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
		// Get User
		[getUser.pending]: (state) => {
			state.isLoading = true;
		},
		[getUser.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
		},
		[getUser.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
	},
});

export default userReducer.reducer;
