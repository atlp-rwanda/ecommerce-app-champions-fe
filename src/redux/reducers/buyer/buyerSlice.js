/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	buyers: null,
	loading: false,
	error: null,
};

const buyerSlice = createSlice({
	name: 'buyers',
	initialState,
	reducers: {
		getBuyersPending: (state) => {
			state.buyers = null;
			state.loading = true;
			state.error = null;
		},
		getBuyersSuccess: (state, action) => {
			state.buyers = action.payload;
			state.loading = false;
			state.error = null;
		},
		getBuyersFail: (state, action) => {
			state.buyers = null;
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getBuyersPending, getBuyersSuccess, getBuyersFail } =
	buyerSlice.actions;

export default buyerSlice.reducer;
