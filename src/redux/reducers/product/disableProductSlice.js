/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	result: [],
};

const disableProductSlice = createSlice({
	name: 'disable',
	initialState,
	reducers: {
		disablePending: (state) => {
			state.loading = true;
		},
		disableSuccess: (state, action) => {
			state.loading = false;
			state.result = action.payload;
			state.error = null;
		},
		disableFail: (state, action) => {
			state.loading = false;
			state.sucess = [];
			state.error = action.payload;
		},
	},
});

export const { disablePending, disableSuccess, disableFail } =
	disableProductSlice.actions;

export default disableProductSlice.reducer;
