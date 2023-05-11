import axios from 'axios';
import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const FetchChatUser = (id) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/user/${id}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const FetchChatMessages = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.get(
				`${url}/api/chat/get-all-chat`,

				{
					headers: { token: `Bearer ${token}` },
				}
			)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
