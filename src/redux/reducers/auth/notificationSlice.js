/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
	getNotifications,
	getBuyerNotifications,
	deleteNotification,
	markAllNotifications,
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
		markAllAsRead: (state) => {
			if (Array.isArray(state.notifications)) {
				state.notifications.forEach((notification) => {
					notification.isRead = true;
				});
			}
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
			})
			.addCase(getBuyerNotifications.pending, (state) => {
				state.loading = true;
			})
			.addCase(getBuyerNotifications.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload.message;
			})
			.addCase(getBuyerNotifications.fulfilled, (state, { payload }) => {
				if (payload.status === 'success') {
					state.loading = false;
					state.notifications = payload.message.reverse();
				} else {
					state.loading = false;
					state.error = payload.message;
				}
			})
			.addCase(deleteNotification.fulfilled, (state, { payload }) => {
				if (payload.status === 'success') {
					state.notifications = state.notifications.filter(
						(notification) => notification.id !== state.notificationId
					);
					state.notificationId = null;
				} else {
					state.error = payload.message;
				}
			})
			.addCase(markAllNotifications.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(markAllNotifications.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.notifications = payload.message;
			})

			.addCase(markAllNotifications.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	},
});

export const { setNotifications, setNotificationId, markAllAsRead } =
	notificationSlice.actions;

export const getNotificationStates = (state) => state.notification;
export default notificationSlice.reducer;
