import axios from 'axios';

import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const newPermission = (token, data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/permission/create`, data, {
				headers: { token: `Bearer ${token}` },
			})
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const enableDisablePermission = (token, id, data) => {
	return new Promise((resolve, reject) => {
		axios
			.patch(`${url}/api/permission/enable-or-disable-permission/${id}`, data, {
				headers: { token: `Bearer ${token}` },
			})
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
