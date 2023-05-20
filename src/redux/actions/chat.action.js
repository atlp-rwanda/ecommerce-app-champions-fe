import {
	getUserPending,
	getUserSuccess,
	getUserFail,
	getMessagePending,
	getMessageSuccess,
	getMessageFail,
} from '../reducers/chat/chatSlice';

import { FetchChatUser, FetchChatMessages } from '../../api/chatApi';

export const getChatUsers = (id) => async (dispatch) => {
	try {
		dispatch(getUserPending());

		const users = await FetchChatUser(id);

		dispatch(getUserSuccess(users));
	} catch (error) {
		dispatch(getUserFail(error.message));
	}
};

export const getChatMessages = (token) => async (dispatch) => {
	try {
		dispatch(getMessagePending());

		const messages = await FetchChatMessages(token);

		dispatch(getMessageSuccess(messages));
	} catch (error) {
		dispatch(getMessageFail(error.message));
	}
};
