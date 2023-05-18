/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	payment: null,
	isloading: false,
	error: null,
};

const paymentSlice = createSlice({
	name: ' payment',
	initialState,
	reducers: {
		paymentSuccess: (state, action) => {
			state.isloading = false;
			state.error = null;
			state.payment = action.payload;
		},
	},
});

export const { paymentSuccess } = paymentSlice.actions;

export default paymentSlice.reducer;
