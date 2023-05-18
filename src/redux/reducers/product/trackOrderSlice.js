/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	orders: null,
};

const trackOrderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		getOrderPending: (state) => {
			state.loading = true;
		},
		getOrderSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = null;
		},
		getOrderFail: (state, action) => {
			state.loading = false;
			state.products = null;
			state.error = action.payload;
		},
	},
});

export const { getOrderPending, getOrderSuccess, getOrderFail } =
	trackOrderSlice.actions;

export default trackOrderSlice.reducer;
