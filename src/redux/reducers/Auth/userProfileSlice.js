/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: null,
	error: null,
	loading: false,
};
const singleProfileSlice = createSlice({
	name: 'userProfile',
	initialState,
	reducers: {
		getProfileStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		getProfileSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.profile = action.payload;
		},
		getProfileFail: (state, action) => {
			state.loading = false;
			state.profile = null;
			state.error = action.payload;
		},
	},
});
export const { getProfileStart, getProfileSuccess, getProfileFail } =
	singleProfileSlice.actions;
export default singleProfileSlice.reducer;
