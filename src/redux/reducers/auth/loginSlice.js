/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	error: null,
	loading: false,
	passwordExpired: false,
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
		passwordExpired: (state) => {
			state.passwordExpired = true;
		},
	},
});
export const { loginStart, loginSuccess, loginFail, passwordExpired } =
	loginSlice.actions;
export default loginSlice.reducer;
