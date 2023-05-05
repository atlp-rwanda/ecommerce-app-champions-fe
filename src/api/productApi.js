import axios from 'axios';
import Cookies from 'js-cookie';
import varkeys from '../constants/keys';

const url = varkeys.APP_URL;

const token = Cookies.get('token');

export const createproduct = (productData) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${url}/api/product/create`, productData, {
				headers: {
					token: `Bearer ${token}`,
				},
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
