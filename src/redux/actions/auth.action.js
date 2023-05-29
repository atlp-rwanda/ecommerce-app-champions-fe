/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import {
	registerPending,
	registerSuccess,
	registerFail,
} from '../reducers/auth/authRegisterSlice';
import { buyerSignup, vendorSignup } from '../../api/userApi';

export const registerBuyer = (buyerData) => async (dispatch) => {
	try {
		dispatch(registerPending());
		const res = await buyerSignup(buyerData);
		dispatch(registerSuccess(res));
		toast.success('Account created! check your email to verify', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error) {
			if (error.message === undefined) return;
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(registerFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(registerFail(error.Error));
	}
};

export const registerVendor = (vendorData) => async (dispatch) => {
	try {
		dispatch(registerPending());
		const res = await vendorSignup(vendorData);
		dispatch(registerSuccess(res));
		toast.success('Account created! check your email to verify', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error) {
			if (error.message === undefined) return;
			toast.error(`${error.message}`, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(registerFail(error.message));
		}
		toast.error(`${error.Error}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
		return dispatch(registerFail(error.Error));
	}
};
