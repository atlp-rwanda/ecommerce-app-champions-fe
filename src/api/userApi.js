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
