import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import varKeys from '../../constants/keys';

const url = varKeys.APP_URL;
const token = Cookies.get('token');

export const getNotifications = createAsyncThunk(
	'getNotifications',
	async () => {
		try {
			const response = await axios.get(
				`${url}/api/notification/getNotifications`,
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
export const getBuyerNotifications = createAsyncThunk(
	'getBuyerNotifications',
	async () => {
		try {
			const response = await axios.get(
				`${url}/api/notification/getBuyerNotifications`,
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
export const deleteNotification = createAsyncThunk(
	'deleteNotifications',
	async (id) => {
		try {
			const response = await axios.delete(
				`${url}/api/notification/deleteNotifications/${id}`,
				{
					headers: {
						token: `Bearer ${token}`,
					},
				}
			);
			return response.data;
		} catch (error) {
			if (error.response.data) {
				return error.response.data;
			}
			return error.message;
		}
	}
);
export const markAllNotifications = createAsyncThunk(
	'markAllNotifications',
	async () => {
		try {
			const response = await axios.patch(
				`${url}/api/notification/markAll`,
				null,
				{
					headers: {
						token: `Bearer ${token}`,
					},
				}
			);
			return response.data;
		} catch (error) {
			if (error.response.data) {
				return error.response.data;
			}
			return error.message;
		}
	}
);
