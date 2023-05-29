/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	products: null,
	setProductId: null,
};

const singleProductSlice = createSlice({
	name: 'singleProduct',
	initialState,
	reducers: {
		getProductByIdPending: (state) => {
			state.loading = true;
		},
		getProductByIdSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = null;
		},
		getProductByIdFail: (state, action) => {
			state.loading = false;
			state.products = null;
			state.error = action.payload;
		},
		setProductId: (state, { payload }) => {
			state.setProductId = payload.id;
		},
	},
});

export const {
	getProductByIdPending,
	getProductByIdSuccess,
	getProductByIdFail,
	setProductId,
} = singleProductSlice.actions;

export default singleProductSlice.reducer;
