import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotifications = createAsyncThunk(
	'getNotifications',
	async () => {
		try {
			const response = await axios.get(
				'http://localhost:5050/api/notification/getNotifications'
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
				`http://localhost:5050/api/notification/deleteNotifications/${id}`
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
