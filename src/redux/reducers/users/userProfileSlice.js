/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import jwtDecode from 'jwt-decode';
// import Cookies from 'js-cookie';
import axios from 'axios';
import varKeys from '../../../constants/keys';

// const token = jwtDecode(Cookies.get('token'));
const userId = 4;

const headers = {
	token:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6eyJpZCI6Mywicm9sZU5hbWUiOiJidXllciIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDFUMDY6NDc6NDcuMTUzWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDFUMDY6NDc6NDcuMTUzWiIsIlBlcm1pc3Npb25zIjpbeyJpZCI6NSwicGVybWlzc2lvbk5hbWUiOiJidXllciB2aWV3cy1wcm9kdWN0IiwiY3JlYXRlZEF0IjoiMjAyMy0wNS0wMVQwNjo0Nzo0Ny4xNjNaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0wMVQwNjo0Nzo0Ny4xNjNaIiwiUm9sZVBlcm1pc3Npb24iOnsiUm9sZUlkIjozLCJQZXJtaXNzaW9uSWQiOjUsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDFUMDY6NDc6NDcuMzgzWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDFUMDY6NDc6NDcuMzgzWiJ9fSx7ImlkIjo2LCJwZXJtaXNzaW9uTmFtZSI6ImJ1eWVyIGJ1eXMtcHJvZHVjdCIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDFUMDY6NDc6NDcuMTYzWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDFUMDY6NDc6NDcuMTYzWiIsIlJvbGVQZXJtaXNzaW9uIjp7IlJvbGVJZCI6MywiUGVybWlzc2lvbklkIjo2LCJjcmVhdGVkQXQiOiIyMDIzLTA1LTAxVDA2OjQ3OjQ3LjM4M1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTAxVDA2OjQ3OjQ3LjM4M1oifX1dfSwiaWF0IjoxNjgyOTMxNDU4fQ.mBGIv3hi3L44-AOL8aL7-Zx32WBwAiD6eVCjqTfY3II',
};

export const updateUserProfile = createAsyncThunk(
	'userProfile/updateProfile',
	async (updatedProfile) => {
		const response = await axios.put(
			`${varKeys.APP_URL}/api/buyer/profile/${userId}`,
			updatedProfile,
			{ headers }
		);
		return response.data;
	}
);

export const fetchUserProfile = createAsyncThunk(
	'userProfile/fetchUserProfile',
	async () => {
		const response = await axios.get(
			`${varKeys.APP_URL}/api/buyer/oneProfile/${userId}`
		);
		return response.data;
	}
);

const initialState = {
	loading: false,
	userProfile: {},
	error: null,
};

const userProfileSlice = createSlice({
	name: 'userProfile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUserProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.userProfile = action.payload;
			})
			.addCase(fetchUserProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(updateUserProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateUserProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.userProfile = action.payload;
			})
			.addCase(updateUserProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default userProfileSlice.reducer;
