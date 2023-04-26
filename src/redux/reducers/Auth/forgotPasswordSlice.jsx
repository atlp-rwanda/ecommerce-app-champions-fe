import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const requestReset = createAsyncThunk(
	'password/requestReset',
	async (email, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				'http://localhost:3000/api/user/requestReset',
				{ email }
			);
			// console.log('dhsjbfuhergfdbhksurf', response.data.message);
			if ((response.data.message = 'Password reset email sent')) {
				document.cookie = `resetToken = ${response.data.token}`;
			}
			return response.data.message;
		} catch (error) {
			const errorMessage = error.response
				? error.response.data.error
				: error.message;
			return rejectWithValue(errorMessage);
		}
	}
);

const initialState = {
	isLoading: false,
	requestResetError: '',
	successMessage: '',
};

export const passwordSlice = createSlice({
	name: 'password',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(requestReset.pending, (state) => {
				state.isLoading = true;
				state.requestResetError = '';
				state.successMessage = '';
			})
			.addCase(requestReset.fulfilled, (state, action) => {
				state.isLoading = false;
				state.successMessage = action.payload;
			})
			.addCase(requestReset.rejected, (state, action) => {
				state.isLoading = false;
				state.requestResetError = action.payload;
			});
	},
});

export default passwordSlice.reducer;
