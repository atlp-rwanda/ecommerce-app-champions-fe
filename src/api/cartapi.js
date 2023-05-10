import axios from 'axios';
import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const userCart = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/cart/getAll`, { headers: { token: `Bearer ${token}` } })
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
export const addToCart = (id, token) => {
	return new Promise((resolve, reject) => {
		axios
			.post(
				`${url}/api/cart/add/${id}`,
				{},
				{
					headers: { token: `Bearer ${token}` },
				}
			)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				if (error.response && error.response.data !== undefined) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
};

export const clearUseCart = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(`${url}/api/cart/clear-cart`, {
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

export const deleteCartItem = (productId, token) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(`${url}/api/cart/clear-cart-item/${productId}`, {
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
