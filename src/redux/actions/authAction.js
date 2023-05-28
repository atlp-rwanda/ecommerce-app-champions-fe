/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import envKeys from '../../constants/keys';

const url = envKeys.APP_URL;

const authAction = createAsyncThunk(
	'AccountVerification',
	async (enteredCode, { rejectWithValue }) => {
		try {
			const vToken = Cookies.get('vendorToken');
			const response = await axios.post(`${url}/api/user/validate/${vToken}`, {
				validToken: enteredCode,
			});
			const { token } = response.data;
			const decodeToken = jwtDecode(token);
			localStorage.setItem('token', token);
			Cookies.set('token', token);
			Cookies.set('name', decodeToken.firstName, { expires: 7 });
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
