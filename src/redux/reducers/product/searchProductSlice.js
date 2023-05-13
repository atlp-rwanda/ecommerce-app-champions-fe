/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	result: [],
};

const searchProductSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchPending: (state) => {
			state.loading = true;
		},
		searchSuccess: (state, action) => {
			state.loading = false;
			state.result = action.payload;
			state.error = null;
		},
		searchFail: (state, action) => {
			state.loading = false;
			state.sucess = [];
			state.error = action.payload;
		},
	},
});

export const { searchPending, searchSuccess, searchFail } =
	searchProductSlice.actions;

export default searchProductSlice.reducer;
