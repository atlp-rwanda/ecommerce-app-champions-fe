/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from 'axios';

const authAction = createAsyncThunk(
	'AccountVerification',
	async (enteredCode, { rejectWithValue }) => {
		try {
			const vToken = Cookies.get('vendorToken');
			const response = await axios.post(
				`https://ecommerce-champions.onrender.com/api/user/validate/${vToken}`,
				{
					validToken: enteredCode,
				}
			);
			const { token } = response.data;
			localStorage.setItem('token', token);
			Cookies.set('token', token);
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
