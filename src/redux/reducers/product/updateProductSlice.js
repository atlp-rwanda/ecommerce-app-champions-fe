/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import varKeys from '../../../constants/keys';

const url = varKeys.APP_URL;
const token = Cookies.get('token');
export const updateProduct = createAsyncThunk(
	'product/updateProduct',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const response = await axios.patch(
				`${url}/api/product/update/${id}`,
				data,
				{
					headers: {
						Token: `Bearer ${token}`,
					},
				}
			);

			toast.success('product updated successfully');

			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				toast.error(error.response.data.error);
				return rejectWithValue(error.response.data);
			} else {
				toast.error('Something went wrong!!!!!!!!!!!!');
				return rejectWithValue({ error: 'Something went wrong' });
			}
		}
	}
);

export const updateProductSlice = createSlice({
	name: 'update',
	initialState: {
		isLoading: false,
		error: null,
		success: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateProduct.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.success = null;
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.success = action.payload.productUpdate;
			})
			.addCase(updateProduct.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.error;
				state.success = null;
			});
	},
});
export default updateProductSlice.reducer;
