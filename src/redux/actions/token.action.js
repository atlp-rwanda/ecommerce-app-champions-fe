import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import {
	fetchToken,
	decodeToken,
	fetchFail,
} from '../reducers/fetchTokenSlice';

const token = Cookies.get('token');
export const handleToken = () => (dispatch) => {
	if (token) {
		const decodedToken = jwtDecode(token);
		dispatch(fetchToken(token));
		dispatch(decodeToken(decodedToken));
	} else {
		dispatch(fetchFail());
	}
};
