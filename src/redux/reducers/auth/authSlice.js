/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: '',
	user: '',
};

const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		registerPending: (state) => {
			state.loading = true;
		},
		registerSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.error = '';
		},
		registerFail: (state, action) => {
			state.loading = false;
			state.user = '';
			state.error = action.payload;
		},
	},
});

export const { registerPending, registerSuccess, registerFail } =
	registerSlice.actions;

export default registerSlice.reducer;
