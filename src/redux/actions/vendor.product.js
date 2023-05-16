import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import varKeys from '../../constants/keys';

const url = varKeys.APP_URL;

export const getVendorProducts = createAsyncThunk(
	'getVendorProducts',
	async (token) => {
		try {
			const response = await axios.get(
				`${url}/api/product/get-seller-products`,
				{
					headers: {
						token: `Bearer ${token}`,
					},
				}
			);
			return response.data;
		} catch (error) {
			if (error.response) {
				return error.response.data;
			}
			return error.message;
		}
	}
);
