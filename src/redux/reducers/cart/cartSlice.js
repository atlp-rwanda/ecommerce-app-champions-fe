/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: null,
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getCartPending: (state) => {
			state.loading = true;
			state.error = null;
			state.cartItems = null;
		},
		getCartSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.cartItems = action.payload;
		},
		getCartFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.cartItems = null;
		},
		addToCartPending: (state) => {
			state.loading = true;
			state.error = null;
			state.cartItems = null;
		},
		addToCartSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.cartItems = action.payload;
		},
		addToCartFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.cartItems = null;
		},
		clearCartPending: (state) => {
			state.loading = true;
			state.error = null;
		},
		clearCartSuccess: (state) => {
			state.loading = false;
			state.error = null;
		},
		clearCartFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		deleteProductPending: (state) => {
			state.loading = true;
			state.error = null;
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
	getCartPending,
	getCartSuccess,
	getCartFail,
	clearCartPending,
	clearCartSuccess,
	clearCartFail,
	deleteProductPending,
	deleteProductSuccess,
	deleteProductFail,
	addToCartPending,
	addToCartSuccess,
	addToCartFail,
} = cartSlice.actions;

export default cartSlice.reducer;
