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
	},
});

export const {
	getCartPending,
	getCartSuccess,
	getCartFail,
	clearCartPending,
	clearCartSuccess,
	clearCartFail,
} = cartSlice.actions;

export default cartSlice.reducer;
