/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	roles: null,
	loading: false,
	error: null,
	role: null,
	newRole: null,
};

const roleSlice = createSlice({
	name: 'roles',
	initialState,
	reducers: {
		getRolesPending: (state) => {
			state.roles = null;
			state.loading = true;
			state.error = null;
		},
		getRolessSuccess: (state, action) => {
			state.roles = action.payload;
			state.loading = false;
			state.error = null;
		},
		getRolesFail: (state, action) => {
			state.roles = null;
			state.loading = false;
			state.error = action.payload;
		},

		newRolePending: (state) => {
			state.role = null;
			state.loading = true;
			state.error = null;
		},
		newRoleSuccess: (state, action) => {
			state.role = action.payload;
			state.loading = false;
			state.error = null;
		},
		newRoleFail: (state, action) => {
			state.role = null;
			state.loading = false;
			state.error = action.payload;
		},
		assignRolePending: (state) => {
			state.newRole = null;
			state.loading = true;
			state.error = null;
		},
		assignRoleSuccess: (state, action) => {
			state.newRole = action.payload;
			state.loading = false;
			state.error = null;
		},
		assignRoleFail: (state, action) => {
			state.newRole = null;
			state.loading = false;
			state.error = action.payload;
		},
		deleteRolePending: (state) => {
			state.role = null;
			state.loading = true;
			state.error = null;
		},
		deleteRoleSuccess: (state, action) => {
			state.role = action.payload;
			state.loading = false;
			state.error = null;
		},
		deleteRoleFail: (state, action) => {
			state.role = null;
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getRolesPending,
	getRolessSuccess,
	getRolesFail,
	newRolePending,
	newRoleSuccess,
	newRoleFail,
	assignRolePending,
	assignRoleSuccess,
	assignRoleFail,
	deleteRolePending,
	deleteRoleSuccess,
	deleteRoleFail,
} = roleSlice.actions;

export default roleSlice.reducer;
