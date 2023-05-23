/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishlistItems: null,
	loading: false,
	error: null,
};

const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addToWishListPending: (state) => {
			state.loading = true;
			state.error = null;
			state.wishlistItems = null;
		},
		addToWishListSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.wishlistItems = action.payload;
		},
		addToWishListFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.wishlistItems = null;
		},
		getWishLIstPending: (state) => {
			state.loading = true;
			state.error = null;
			state.wishlistItems = null;
		},
		getWishListSuccess: (state, action) => {
			state.loading = false;
			state.error = null;
			state.wishlistItems = action.payload;
		},
		getWishListFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.wishlistItems = null;
		},
		deleteWishlistPending: (state) => {
			state.error = null;
			state.loading = true;
		},
		deleteWishlistSuccess: (state) => {
			state.loading = false;
			state.error = null;
		},
		deleteWishlistFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addToWishListFail,
	addToWishListPending,
	addToWishListSuccess,
	getWishLIstPending,
	getWishListSuccess,
	getWishListFail,
	deleteWishlistFail,
	deleteWishlistSuccess,
	deleteWishlistPending,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
