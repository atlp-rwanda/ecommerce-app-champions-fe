/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import varKeys from '../../../constants/keys';

const url = varKeys.APP_URL;

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get(`${url}/api/product/getAvailable`);
		return response.data.items;
	}
);

export const getVendorProducts = createAsyncThunk(
	'products/fetchVendorProducts',
	async (token) => {
		const response = await axios.get(`${url}/api/product/getAll`, {
			headers: {
				token: `Bearer ${token}`,
			},
		});

		return response.data.items;
	}
);

export const deleteProduct = createAsyncThunk(
	'product/deleteProduct',
	async (productId, token) => {
		const prods = await axios.delete(
			`${varKeys.APP_URL}/api/product/delete/${productId}`,
			{
				headers: {
					token: `Bearer ${token}`,
				},
			}
		);
		return prods.data;
	}
);

const initialState = {
	loading: false,
	error: null,
	items: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = '';
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.error.message;
		});
		builder.addCase(getVendorProducts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getVendorProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = '';
		});
		builder.addCase(getVendorProducts.rejected, (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.error.message;
		});

		builder.addCase(deleteProduct.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = '';
		});
		builder.addCase(deleteProduct.rejected, (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.error.message;
		});
	},
});

export default productsSlice.reducer;
