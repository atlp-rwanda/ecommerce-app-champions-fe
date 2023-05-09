import axios from 'axios';
import Cookies from 'js-cookie';
import varKeys from '../constants/keys';

const url = varKeys.APP_URL;

const api = {
	getVendorProducts: (token) => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${url}/api/product/getAll`, {
					headers: {
						token: `Bearer ${token}`,
					},
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					if (error.response !== undefined) {
						reject(error.response.data);
					}
					reject(error);
				});
		});
	},

	deleteProduct: (productId, token) => {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${url}/api/product/delete/${productId}`, {
					headers: {
						token: `Bearer ${token}`,
					},
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					if (error.response !== undefined) {
						reject(error.response.data);
					}
					reject(error);
				});
		});
	},
};

const token = Cookies.get('token');

export const createproduct = (productData) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/product/create`, productData, {
				headers: { Token: `Bearer ${token}` },
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

export default api;
