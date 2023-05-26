/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	salesItems: null,
	loading: false,
	error: null,
};

const salesSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {
		getSalesPending: (state) => {
			state.loading = true;
			state.error = null;
			state.salesItems = null;
		},
		getSalesSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.salesItems = action.payload;
		},
		getSalesFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.salesItems = null;
		},
	},
});

export const { getSalesFail, getSalesPending, getSalesSuccess } =
	salesSlice.actions;

export default salesSlice.reducer;
