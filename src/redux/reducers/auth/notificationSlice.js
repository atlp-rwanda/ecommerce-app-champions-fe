/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getNotifications } from '../../actions/notifications';

const initialState = {
	notificationId: null,
	loading: false,
	notifications: [],
	error: null,
	message: {},
};

const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		setTotalNotification: (state, action) => {
			const newNotification = action.payload;
			const exist = state.notifications.some(
				(notification) => notification.id === newNotification.id
			);
			if (!exist) {
				state.notifications = [action.payload, ...state.notifications];
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotifications.pending, (state) => {
				state.loading = true;
			})
			.addCase(getNotifications.rejected, (state) => {
				state.loading = false;
				state.error.status = true;
			})
			.addCase(getNotifications.fulfilled, (state, { payload }) => {
				if (payload.status === 200) {
					state.loading = false;
					state.notifications = payload.notifications.filter(
						(notification) => !notification.read
					);
				} else if (payload.status) {
					state.loading = false;
					state.error = { status: true, payload: payload.status };
				} else {
					state.loading = false;
					state.error = { payload, status: true };
				}
			});
	},
});

export const { setTotalNotification } = notificationSlice.actions;

export const getNotificationStates = (state) => state.notification;
export default notificationSlice.reducer;
