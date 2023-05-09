/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: null,
	decodedToken: null,
};

const fetchTokenSlice = createSlice({
	name: 'fetchToken',
	initialState,
	reducers: {
		fetchToken: (state, action) => {
			state.token = action.payload;
		},
		decodeToken: (state, action) => {
			state.decodedToken = action.payload;
		},
		fetchFail: (state) => {
			state.token = null;
			state.decodedToken = null;
		},
	},
});

export const { fetchToken, decodeToken, fetchFail } = fetchTokenSlice.actions;

export default fetchTokenSlice.reducer;
