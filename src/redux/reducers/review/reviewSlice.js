/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	results: null,
	loading: false,
	error: null,
};

const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {
		addReviewPending: (state) => {
			state.loading = true;
			state.error = null;
			state.results = null;
		},
		addReviewSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.results = action.payload;
		},
		addReviewFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.results = null;
		},
		getReviewPending: (state) => {
			state.loading = true;
			state.error = null;
			state.results = null;
		},
		getReviewSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.results = action.payload;
		},
		getReviewFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.results = null;
		},
		updateReviewPending: (state) => {
			state.loading = true;
			state.error = null;
			state.results = null;
		},
		updateReviewSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.results = action.payload;
		},
		updateReviewFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.results = null;
		},
		deleteReviewPending: (state) => {
			state.loading = true;
			state.error = null;
		},
		deleteReviewSuccess: (state) => {
			state.loading = false;
			state.error = null;
		},
		deleteReviewFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addReviewPending,
	addReviewSuccess,
	addReviewFail,
	getReviewPending,
	getReviewSuccess,
	getReviewFail,
	updateReviewPending,
	updateReviewSuccess,
	updateReviewFail,
	deleteReviewPending,
	deleteReviewSuccess,
	deleteReviewFail,
} = reviewSlice.actions;

export default reviewSlice.reducer;
