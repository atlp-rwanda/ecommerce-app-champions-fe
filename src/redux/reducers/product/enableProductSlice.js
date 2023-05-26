/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	result: [],
};

const enableProductSlice = createSlice({
	name: 'enable',
	initialState,
	reducers: {
		enablePending: (state) => {
			state.loading = true;
		},
		enableSuccess: (state, action) => {
			state.loading = false;
			state.result = action.payload;
			state.error = null;
		},
		enableFail: (state, action) => {
			state.loading = false;
			state.sucess = [];
			state.error = action.payload;
		},
	},
});

export const { enablePending, enableSuccess, enableFail } =
	enableProductSlice.actions;

export default enableProductSlice.reducer;
