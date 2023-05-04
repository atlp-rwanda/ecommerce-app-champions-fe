/* eslint-disable consistent-return */
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export const getStoredValues = () => {
	const token = Cookies.get('token');
	if (!token) return;
	const decodedToken = jwtDecode(token);
	return { token, decodedToken };
};
