/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	error: null,
	sucess: null,
};

const updateProductSlice = createSlice({
	name: 'updateProduct',
	initialState,
	reducers: {
		updatePending: (state) => {
			state.isLoading = true;
		},
		updateSuccess: (state, action) => {
			state.isLoading = false;
			state.sucess = action.payload;
			state.error = null;
		},
		updateFail: (state, action) => {
			state.isLoading = false;
			state.sucess = null;
			state.error = action.payload;
		},
	},
});

export const { updatePending, updateSuccess, updateFail } =
	updateProductSlice.actions;

export default updateProductSlice.reducer;
