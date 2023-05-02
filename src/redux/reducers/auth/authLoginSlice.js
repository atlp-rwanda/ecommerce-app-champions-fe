/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	error: null,
	loading: false,
};
const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.user = action.payload;
		},
		loginFail: (state, action) => {
			state.loading = false;
			state.user = null;
			state.error = action.payload;
		},
	},
});
export const { loginStart, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;
