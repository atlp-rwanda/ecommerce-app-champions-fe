/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import varKeys from '../../../constants/keys';

const vendorId = 1;

export const updateVendorProfile = createAsyncThunk(
	'vendorProfile/updateProfile',
	async (updatedProfile) => {
		const response = await axios.put(
			`${varKeys.APP_URL}/api/vendor/profile/${vendorId}`,
			updatedProfile
		);
		return response.data;
	}
);

export const fetchVendorProfile = createAsyncThunk(
	'vendorProfile/fetchVendorProfile',
	async () => {
		const response = await axios.get(
			`${varKeys.APP_URL}/api/vendor/oneProfile/${vendorId}`
		);
		return response.data;
	}
);

const initialState = {
	loading: false,
	vendorProfile: {},
	error: null,
};

const vendorProfileSlice = createSlice({
	name: 'vendorProfile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchVendorProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchVendorProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.vendorProfile = action.payload;
			})
			.addCase(fetchVendorProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(updateVendorProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateVendorProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.vendorProfile = action.payload;
			})
			.addCase(updateVendorProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default vendorProfileSlice.reducer;
