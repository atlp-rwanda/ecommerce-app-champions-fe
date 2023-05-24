/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	error: null,
	sucess: null,
	updateProductId: null,
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
			state.updateProductId = null;
		},
		updateFail: (state, action) => {
			state.isLoading = false;
			state.sucess = null;
			state.error = action.payload;
		},
		setUpdateProductId: (state, { payload }) => {
			state.updateProductId = payload.id;
		},
	},
});

export const { updatePending, updateSuccess, updateFail, setUpdateProductId } =
	updateProductSlice.actions;

export default updateProductSlice.reducer;
