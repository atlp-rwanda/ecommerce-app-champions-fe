/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	checkout: null,
	isloading: false,
	error: null,
};

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		checkoutPending: (state) => {
			state.isloading = true;
			state.error = null;
			state.checkout = null;
		},
		checkoutSuccess: (state, action) => {
			state.isloading = false;
			state.error = null;
			state.checkout = action.payload;
		},
		checkoutFail: (state, action) => {
			state.isloading = false;
			state.error = action.payload;
			state.checkout = null;
		},
	},
});

export const { checkoutPending, checkoutSuccess, checkoutFail } =
	checkoutSlice.actions;

export default checkoutSlice.reducer;
