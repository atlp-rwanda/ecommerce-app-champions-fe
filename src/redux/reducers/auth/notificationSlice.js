/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
	getNotifications,
	deleteNotification,
} from '../../actions/notifications';

const initialState = {
	notificationId: null,
	loading: false,
	notifications: [],
	error: null,
};

const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		setNotifications: (state, { payload }) => {
			state.notifications.unshift(payload);
		},
		setNotificationId: (state, { payload }) => {
			state.notificationId = payload.id;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotifications.pending, (state) => {
				state.loading = true;
			})
			.addCase(getNotifications.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload.message;
			})
			.addCase(getNotifications.fulfilled, (state, { payload }) => {
				if (payload.status === 'success') {
					state.loading = false;
					state.notifications = payload.message.reverse();
				} else {
					state.loading = false;
					state.error = payload.message;
				}
			});
		builder.addCase(deleteNotification.fulfilled, (state, { payload }) => {
			if (payload.status === 'success') {
				state.notifications = state.notifications.filter(
					(notification) => notification.id !== state.notificationId
				);
				state.notificationId = null;
			} else {
				state.error = payload.message;
			}
		});
	},
});

export const { setTotalNotification, setNotifications, setNotificationId } =
	notificationSlice.actions;

export const getNotificationStates = (state) => state.notification;
export default notificationSlice.reducer;
