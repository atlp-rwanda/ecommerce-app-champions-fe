/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getVendorProducts } from '../../actions/vendor.product';

const initialState = {
	loading: false,
	vendorProducts: [],
	error: null,
};

const vendorProductSlice = createSlice({
	name: 'vendorProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getVendorProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(getVendorProducts.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload.message;
			})
			.addCase(getVendorProducts.fulfilled, (state, { payload }) => {
				if (payload.status === 'success') {
					state.loading = false;
					state.vendorProducts = payload.products;
				} else {
					state.loading = false;
					state.error = payload.message;
				}
			});
	},
});

export default vendorProductSlice.reducer;
