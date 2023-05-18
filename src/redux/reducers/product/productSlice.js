/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	loadRecommended: false,
	error: null,
	products: [],
	product: null,
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
		getAvailableProductsPending: (state) => {
			state.loading = true;
		},
		getAvailableProductsSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = null;
		},
		getAvailableProductsFail: (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.payload;
		},
		getSingleProductPending: (state) => {
			state.loading = true;
			state.product = null;
			state.error = null;
		},
		getSingleProductSuccess: (state, action) => {
			state.loading = false;
			state.product = action.payload;
			state.error = null;
		},
		getSingleProductFail: (state, action) => {
			state.loading = false;
			state.product = null;
			state.error = action.payload;
		},
		getrRecommenedProductsPending: (state) => {
			state.loadRecommended = true;
			state.products = null;
			state.error = null;
		},
		getrRecommenedProductsSuccess: (state, action) => {
			state.loadRecommended = false;
			state.products = action.payload;
			state.error = null;
		},
		getrRecommenedProductsFail: (state, action) => {
			state.loadRecommended = false;
			state.products = null;
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
	getAvailableProductsPending,
	getAvailableProductsSuccess,
	getAvailableProductsFail,
	getSingleProductPending,
	getSingleProductSuccess,
	getSingleProductFail,
	getrRecommenedProductsPending,
	getrRecommenedProductsSuccess,
	getrRecommenedProductsFail,
} = productsSlice.actions;

export default productsSlice.reducer;
