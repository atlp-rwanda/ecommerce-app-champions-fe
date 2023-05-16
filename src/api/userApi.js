/* eslint-disable prettier/prettier */
/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const buyerSignup = (buyerData) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/buyer/signup`, buyerData)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const vendorSignup = (vendorData) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/vendor/signup`, vendorData)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
export const Userlogin = (userData) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/user/login`, userData)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const updateBuyer = (buyerData, token, userId) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`${url}/api/buyer/profile/${userId}`, buyerData, {
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

export const updateVendor = (vendorData, token, userId) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`${url}/api/vendor/profile/${userId}`, vendorData, {
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

export const singleBuyerProfile = (buyerId) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/buyer/oneProfile/${buyerId}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const singleVendorProfile = (vendorId) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/vendor/oneProfile/${vendorId}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
