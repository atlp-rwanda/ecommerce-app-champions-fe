/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const requestReset = createAsyncThunk(
	'password/requestReset',
	async (email, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				'http://localhost:3000/api/user/requestReset',
				{ email }
			);

			if (response.data.message) {
				document.cookie = `resetToken = ${response.data.token}`;
			}

			toast.success(response.data.message);

			return response.data.message;
		} catch (error) {
			const errorMessage = error.response
				? error.response.data.error
				: error.message;

			toast.error(errorMessage);

			return rejectWithValue(errorMessage);
		}
	}
);

const initialState = {
	isLoading: false,
	requestResetError: null,
	successMessage: null,
};

export const passwordSlice = createSlice({
	name: 'password',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(requestReset.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(requestReset.fulfilled, (state, action) => {
				state.isLoading = false;
				state.successMessage = action.payload;
				state.requestResetError = null;
			})
			.addCase(requestReset.rejected, (state, action) => {
				state.isLoading = false;
				state.successMessage = null;
				state.requestResetError = action.payload;
			});
	},
});

export default passwordSlice.reducer;
