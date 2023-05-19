/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	permission: null,
	loading: false,
	error: null,
};

const permissionSlice = createSlice({
	name: 'roles',
	initialState,
	reducers: {
		createPermissionPending: (state) => {
			state.permission = null;
			state.loading = true;
			state.error = null;
		},
		createPermissionSuccess: (state, action) => {
			state.permission = action.payload;
			state.loading = false;
			state.error = null;
		},
		createPermissionFail: (state, action) => {
			state.permission = null;
			state.loading = false;
			state.error = action.payload;
		},
		enableAndDisablePermissionPending: (state) => {
			state.permission = null;
			state.loading = true;
			state.error = null;
		},
		enableAndDisablePermissionSuccess: (state, action) => {
			state.permission = action.payload;
			state.loading = false;
			state.error = null;
		},
		enableAndDisablePermissionFail: (state, action) => {
			state.permission = null;
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	createPermissionPending,
	createPermissionSuccess,
	createPermissionFail,
	enableAndDisablePermissionPending,
	enableAndDisablePermissionSuccess,
	enableAndDisablePermissionFail,
} = permissionSlice.actions;

export default permissionSlice.reducer;
