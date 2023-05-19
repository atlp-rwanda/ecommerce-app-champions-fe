/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rating: null,
	loading: false,
	error: null,
};

const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		getRatePending: (state) => {
			state.loading = true;
			state.error = null;
			state.rating = null;
		},
		getRateSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.rating = action.payload;
		},
		getRateFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.rating = null;
		},
	},
});

export const { getRatePending, getRateSuccess, getRateFail } =
	ratingSlice.actions;

export default ratingSlice.reducer;
