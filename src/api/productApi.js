import axios from 'axios';
import Cookies from 'js-cookie';
import varKeys from '../constants/keys';

const url = varKeys.APP_URL;

export const singleProduct = (productId) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/product/getOne/${productId}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const productRating = (productId) => {
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

export const searchProd = (product) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/product/searcch?searchParam=${product}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

const api = {
	getVendorProducts: (token) => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${url}/api/product/getAvailable`, {
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

	getAvailableProducts: (token) => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${url}/api/product/getAvailable`, {
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
	getProductById: (productId, token) => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${url}/api/product/getOne/${productId}`, {
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

export const updateProduct = (id, data, token) => {
	return new Promise((resolve, reject) => {
		axios
			.patch(`${url}/api/product/update/${id}`, data, {
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
export const searchProduct = (searchParam) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/api/product/searcch?searchParam=${searchParam}`)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
const token = Cookies.get('token');

export const createproduct = (productData) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/product/create`, productData, {
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

export default api;
