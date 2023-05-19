import axios from 'axios';
import varKeys from '../constants/keys';

const url = varKeys.APP_URL;

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
