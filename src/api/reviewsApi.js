import axios from 'axios';
import varKeys from '../constants/keys';

const url = varKeys.APP_URL;

export const productReview = (token, productId, data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/review/createReview/${productId}`, data, {
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

export const getReview = (productId) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/review/getProductReview/${productId}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const getRate = (productId) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/review/getProductRate/${productId}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const updateReview = (token, productId, data) => {
	return new Promise((resolve, reject) => {
		axios
			.patch(`${url}/api/review/updateReview/${productId}`, data, {
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

export const deleteReview = (token, productId) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(`${url}/api/review/deleteReview/${productId}`, {
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
