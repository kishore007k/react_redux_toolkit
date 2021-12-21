import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
	"product/getAllProducts",
	async (limit) => {
		const response = await axios.get(
			`https://fakestoreapi.com/products?limit=${limit}?sort=desc`
		);
		return response.data;
	}
);

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
	const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
	return response.data;
});

const productReducer = createSlice({
	name: "product",
	initialState: {
		products: [],
		product: {},
		isLoading: false,
		error: null,
	},
	extraReducers: {
		// Get all Products
		[getAllProducts.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		},
		[getAllProducts.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
		// Get Product
		[getProduct.pending]: (state) => {
			state.isLoading = true;
		},
		[getProduct.fulfilled]: (state, action) => {
			state.product = action.payload;
			state.isLoading = false;
		},
		[getProduct.rejected]: (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		},
	},
});

export default productReducer.reducer;
