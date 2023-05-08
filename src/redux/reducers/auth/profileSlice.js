/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: null,
	error: null,
	loading: false,
};
const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		updateProfileStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		updateProfileSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.profile = action.payload;
		},
		updateProfileFail: (state, action) => {
			state.loading = false;
			state.profile = null;
			state.error = action.payload;
		},
	},
});
export const { updateProfileStart, updateProfileSuccess, updateProfileFail } =
	profileSlice.actions;
export default profileSlice.reducer;
