/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	product: null,
};

const createProductSlice = createSlice({
	name: 'createproduct',
	initialState,
	reducers: {
		createPending: (state) => {
			state.loading = true;
		},
		createSuccess: (state, action) => {
			state.loading = false;
			state.product = action.payload;
			state.error = null;
		},
		createFail: (state, action) => {
			state.loading = false;
			state.product = null;
			state.error = action.payload;
		},
		resetProduct: (state) => {
			state.loading = false;
			state.product = null;
			state.error = null;
		},
	},
});

export const { createPending, createSuccess, createFail, resetProduct } =
	createProductSlice.actions;

export default createProductSlice.reducer;
