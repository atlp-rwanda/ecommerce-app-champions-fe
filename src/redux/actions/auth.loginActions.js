/* eslint-disable */
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
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
		if (res.token && !res.encodedOTP) {
			Cookies.set('token', res.token, { expires: 7 });
			dispatch(loginSuccess(res));
		} else if (res.loginOTP) {
			Cookies.set('loginOTP', res.loginOTP);
			dispatch(loginSuccess(res));
		} else if (res.passwordExpired) {
			dispatch(passwordExpired(res));
			Cookies.set('token', res.loginOTP);
		} else if (res.encodedOTP) {
			Cookies.set('loginVendorid', res.user);
			Cookies.set('loginOTP', res.encodedOTP);
			Cookies.set('vendorToken', res.token);
			dispatch(loginSuccess(res));
		}
		toast.success('login successful', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error && error.message.includes('password has expired')) {
			dispatch(passwordExpired());
			Swal.fire({
				title: 'Password Expired!',
				width: 400,
				padding: '1em',
				color: '#225F33',
				background:
					'linear-gradient(to bottom, #34D399 0%, #A7F3D0 50%, #D1FAE5 100%)',
				html: '<span style="font-family: Inter">Please check your email to update your password.<br/><br/><a href="https://mail.google.com" style="text-decoration: underline;">Click here to go to your Gmail inbox</a></span>',
				icon: 'warning',
				showConfirmButton: false,
				showCancelButton: true,
				cancelButtonColor: '#d33',
			});
		} else {
			toast.error('Invalid Credentials', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(loginFail('Invalid Credentials.'));
		}
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
