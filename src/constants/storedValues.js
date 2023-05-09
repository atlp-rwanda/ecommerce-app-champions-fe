/* eslint-disable consistent-return */
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export const getStoredValues = () => {
	if (Cookies.get('token') && Cookies.get('token') !== '') {
		const token = Cookies.get('token');
		const decodedToken = jwtDecode(token);
		const data = { token, decodedToken };
		return data;
	}
};
