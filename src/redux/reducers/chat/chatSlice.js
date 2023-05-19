/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	chat: [],
	user: {},
};

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		getUserPending: (state) => {
			state.loading = true;
		},
		getUserSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.error = null;
		},
		getUserFail: (state, action) => {
			state.loading = false;
			state.user = {};
			state.error = action.payload;
		},
		getMessagePending: (state) => {
			state.loading = true;
		},
		getMessageSuccess: (state, action) => {
			state.loading = false;
			state.chat = action.payload;
			state.error = null;
		},
		getMessageFail: (state, action) => {
			state.loading = false;
			state.chat = [];
			state.error = action.payload;
		},
	},
});

export const {
	getUserPending,
	getUserSuccess,
	getUserFail,
	getMessagePending,
	getMessageSuccess,
	getMessageFail,
} = chatSlice.actions;

export default chatSlice.reducer;
