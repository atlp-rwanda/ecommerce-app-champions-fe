/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	error: null,
	result: [],
};

const enableProductSlice = createSlice({
	name: 'enable',
	initialState,
	reducers: {
		enablePending: (state) => {
			state.isLoading = true;
		},
		enableSuccess: (state, action) => {
			state.isLoading = false;
			state.result = action.payload;
			state.error = null;
		},
		enableFail: (state, action) => {
			state.isLoading = false;
			state.sucess = [];
			state.error = action.payload;
		},
	},
});

export const { enablePending, enableSuccess, enableFail } =
	enableProductSlice.actions;

export default enableProductSlice.reducer;
