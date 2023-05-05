/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: '',
	product: '',
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
			state.error = '';
		},
		createFail: (state, action) => {
			state.loading = false;
			state.product = '';
			state.error = action.payload;
		},
	},
});

export const { createPending, createSuccess, createFail } =
	createProductSlice.actions;

export default createProductSlice.reducer;
