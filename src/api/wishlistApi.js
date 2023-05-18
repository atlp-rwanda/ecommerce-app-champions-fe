import axios from 'axios';
import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

export const addToWishList = (id, token) => {
	return new Promise((resolve, reject) => {
		axios
			.post(
				`${url}/api/product/addToWishlist/${id}`,
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

export const getWishLIst = (token) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/product/retrieveWishlistItems`, {
				headers: { token: `Bearer ${token}` },
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				if (error.message && error.response.data !== undefined) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
};
