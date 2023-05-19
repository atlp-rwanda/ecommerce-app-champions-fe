import axios from 'axios';

import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const allRoles = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/role/all`, { headers: { token: `Bearer ${token}` } })
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const assignRole = (token, id, data) => {
	return new Promise((resolve, reject) => {
		axios
			.patch(`${url}/api/role/assign-role/${id}`, data, {
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

export const newRole = (token, data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/role/create`, data, {
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

export const destroyRole = (token, roleId) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(`${url}/api/role/delete/${roleId}`, {
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
