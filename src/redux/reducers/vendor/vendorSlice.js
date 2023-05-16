/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	vendors: null,
	loading: false,
	error: null,
	vendor: null,
};

const vendorSlice = createSlice({
	name: 'vendors',
	initialState,
	reducers: {
		getVendorsPending: (state) => {
			state.vendors = null;
			state.loading = true;
			state.error = null;
		},
		getVendorsSuccess: (state, action) => {
			state.vendors = action.payload;
			state.loading = false;
			state.error = null;
		},
		getVendorsFail: (state, action) => {
			state.vendors = null;
			state.loading = false;
			state.error = action.payload;
		},
		enableVendorPending: (state) => {
			state.vendor = null;
			state.loading = true;
			state.error = null;
		},
		enableVendorSuccess: (state, action) => {
			state.vendor = action.payload;
			state.loading = false;
			state.error = null;
		},
		enableVendorFail: (state, action) => {
			state.vendor = null;
			state.loading = false;
			state.error = action.payload;
		},
		disableVendorPending: (state) => {
			state.vendor = null;
			state.loading = true;
			state.error = null;
		},
		disableVendorSuccess: (state, action) => {
			state.vendor = action.payload;
			state.loading = false;
			state.error = null;
		},
		disableVendorFail: (state, action) => {
			state.vendor = null;
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getVendorsPending,
	getVendorsSuccess,
	getVendorsFail,
	enableVendorPending,
	enableVendorSuccess,
	enableVendorFail,
	disableVendorPending,
	disableVendorSuccess,
	disableVendorFail,
} = vendorSlice.actions;

export default vendorSlice.reducer;
