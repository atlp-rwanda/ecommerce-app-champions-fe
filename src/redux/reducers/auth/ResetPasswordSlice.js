/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Cookies from 'js-cookie';
import varKeys from '../../../constants/keys';

const url = varKeys.APP_URL;

export const processReset = createAsyncThunk(
	'resetPassword/processReset',
	async ({ token, password, confirmPassword }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${url}/api/user/resetpassword/${token}`,
				{ password, confirmPassword }
			);

			toast.success(response.data.message);

			return response.data;
		} catch (error) {
			// console.log( "gdbrtgbsdtrgsdtr",error)
			if (error.response && error.response.data) {
				toast.error(error.response.data.error);
				return rejectWithValue(error.response.data);
			} else {
				toast.error('Something went wrong');
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
