import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import {
	fetchToken,
	decodeToken,
	fetchFail,
	fetchName,
} from '../reducers/fetchTokenSlice';

const token = Cookies.get('token');
const name = Cookies.get('name');
export const handleToken = () => (dispatch) => {
	if (token) {
		const decodedToken = jwtDecode(token);
		dispatch(fetchToken(token));
		dispatch(fetchName(name));
		dispatch(decodeToken(decodedToken));
	} else {
		dispatch(fetchFail());
	}
};

export const handleUserToken = (usertoken) => (dispatch) => {
	if (usertoken) {
		const decodedToken = jwtDecode(usertoken);
		dispatch(fetchToken(usertoken));
		dispatch(decodeToken(decodedToken));
	} else {
		dispatch(fetchFail());
	}
};
