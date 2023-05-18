import axios from 'axios';

import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const allBuyers = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/buyer/all`, { headers: { token: `Bearer ${token}` } })
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
