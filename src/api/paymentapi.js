import axios from 'axios';
import Cookies from 'js-cookie';
import varkeys from '../constants/keys';

const url = varkeys.APP_URL;
const token = Cookies.get('token');

export const paymentApi = () => {
	return new Promise((resolve, reject) => {
		axios
			.post(
				`${url}/api/payment/checkout`,
				{},
				{ headers: { token: `Bearer ${token}` } }
			)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};

export const paymentsuccessApi = (ptoken, paymentId, amount) => {
	return new Promise((resolve, reject) => {
		axios
			.get(
				`${url}/api/payment/paymentSuccess?token=${ptoken}&paymentId=${paymentId}&amount=${amount}`
			)
			.then((response) => resolve(response.data))
			.catch((error) => {
				if (error.response.data !== undefined) {
					reject(error.response.data);
				}
				reject(error);
			});
	});
};
