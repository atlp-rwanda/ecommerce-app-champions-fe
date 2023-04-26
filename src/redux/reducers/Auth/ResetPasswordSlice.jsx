import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const processReset = createAsyncThunk(
	'resetPassword/processReset',
	async ({ token, password, confirmPassword }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`http://localhost:3000/api/user/resetpassword/${token}`,
				{ password, confirmPassword }
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				return rejectWithValue(error.response.data);
			} else {
				return rejectWithValue({ error: 'Something went wrong' });
			}
		}
	}
);

export const resetPasswordSlice = createSlice({
	name: 'resetPassword',
	initialState: {
		loading: false,
		error: null,
		success: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(processReset.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.success = null;
			})
			.addCase(processReset.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.success = action.payload.message;
			})
			.addCase(processReset.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.error;
				state.success = null;
			});
	},
});
export default resetPasswordSlice.reducer;
