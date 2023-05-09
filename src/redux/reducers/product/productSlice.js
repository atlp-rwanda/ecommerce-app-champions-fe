/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	products: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProductsPending: (state) => {
			state.loading = true;
		},
		getProductsSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = null;
		},
		getProductsFail: (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.payload;
		},
		deleteProductPending: (state) => {
			state.loading = true;
		},
		deleteProductSuccess: (state) => {
			state.loading = false;
			state.error = null;
		},
		deleteProductFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getProductsPending,
	getProductsSuccess,
	getProductsFail,
	deleteProductPending,
	deleteProductSuccess,
	deleteProductFail,
} = productsSlice.actions;

export default productsSlice.reducer;
