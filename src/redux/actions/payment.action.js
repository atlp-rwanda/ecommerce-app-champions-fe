/* eslint-disable no-empty */
import { paymentSuccess } from '../reducers/pay/paymentSlice';

import {
	checkoutPending,
	checkoutSuccess,
	checkoutFail,
} from '../reducers/pay/checkoutSlice';

import { paymentApi, paymentsuccessApi } from '../../api/paymentapi';

export const paymentaction = () => async (dispatch) => {
	try {
		dispatch(checkoutPending());

		const res = await paymentApi();

		dispatch(checkoutSuccess(res));
	} catch (error) {
		dispatch(checkoutFail());
	}
};

export const paymentSuccessaction =
	(token, paymentId, amount) => async (dispatch) => {
		try {
			const res = await paymentsuccessApi(token, paymentId, amount);
			dispatch(paymentSuccess(res));
		} catch (error) {}
	};