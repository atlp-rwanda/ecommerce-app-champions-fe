import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { Userlogin } from '../../api/userApi';

import {
	loginStart,
	loginSuccess,
	loginFail,
} from '../reducers/auth/loginSlice';

export const login = (userData) => async (dispatch) => {
	try {
		dispatch(loginStart());
		const res = await Userlogin(userData);
		if (res.token) {
			Cookies.set('token', res.token, { expires: 7 });
			dispatch(loginSuccess(res));
		} else if (res.loginOTP) {
			Cookies.set('token', res.loginOTP);
			dispatch(loginSuccess(res));
		}
		toast.success('login successful', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error) {
			toast.error('invalid credentials', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(loginFail(error.message));
		}
		toast.error('invalid credentials', { position: toast.POSITION.TOP_RIGHT });
		return dispatch(loginFail(error.Error));
	}
};
