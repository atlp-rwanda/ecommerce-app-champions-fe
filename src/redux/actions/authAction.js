import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authAction = createAsyncThunk(
	'AccountVerification',
	async (enteredCode, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`https://ecommerce-champions.onrender.com/api/user/validate`,
				{
					token: parseInt(enteredCode, 10),
				}
			);
			const { token } = response.data;
			localStorage.setItem('token', token);
			return response.data;
		} catch (error) {
			if (error.response) {
				return rejectWithValue(error.response.data);
			}
			return rejectWithValue({ message: error.message });
		}
	}
);

export default authAction;
