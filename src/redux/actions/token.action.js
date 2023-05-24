import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import {
	fetchToken,
	decodeToken,
	fetchFail,
	fetchName,
} from '../reducers/fetchTokenSlice';

export const handleToken = () => (dispatch) => {
	const token = Cookies.get('token');
	const name = Cookies.get('name');
	if (token) {
		const decodedToken = jwtDecode(token);
		dispatch(fetchToken(token));
		dispatch(fetchName(name));
		dispatch(decodeToken(decodedToken));
	} else {
		dispatch(fetchFail());
	}
};

export const handleLogout = () => (dispatch) => {
	const token = Cookies.get('token');
	dispatch(fetchToken(token));
	localStorage.clear();
	Cookies.remove('token', { path: '/' });
	Cookies.remove('name', { path: '/' });
	Cookies.remove('vendorToken', { path: '/' });
	Cookies.remove('loginOTP', { path: '/' });
	Cookies.remove('loginVendorid', { path: '/' });
	return null;
};
