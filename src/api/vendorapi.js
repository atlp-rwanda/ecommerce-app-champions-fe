import axios from 'axios';

import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const allVendors = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/vendor/all`, { headers: { token: `Bearer ${token}` } })
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const enable = (token, id) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`${url}/api/vendor/enable/${id}`, {
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

export const disable = (token, id) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/vendor/disable/${id}`, {
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
