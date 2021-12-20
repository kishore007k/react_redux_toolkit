import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGallery = createAsyncThunk(
	"gallery/fetchGallery",
	async () => {
		const random = Math.floor(Math.random() * 10);
		const response = await axios.get(
			`https://picsum.photos/v2/list?page=${random}&limit=36`,
			{
				headers: {
					Accept: "text/html",
				},
			}
		);
		return response.data;
	}
);

const galleryReducer = createSlice({
	name: "gallery",
	initialState: {
		images: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[fetchGallery.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchGallery.fulfilled]: (state, action) => {
			state.images = action.payload;
			state.isLoading = false;
		},
		[fetchGallery.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
	},
});

export default galleryReducer.reducer;
