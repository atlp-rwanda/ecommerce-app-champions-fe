/* eslint-disable consistent-return */
import {
	getCartPending,
	getCartSuccess,
	getCartFail,
	clearCartPending,
	clearCartSuccess,
	clearCartFail,
} from '../reducers/cart/cartSlice';
import { userCart, clearUseCart } from '../../api/cartapi';

export const getCart = (token) => async (dispatch) => {
	try {
		dispatch(getCartPending());
		const res = await userCart(token);
		dispatch(getCartSuccess(res));
	} catch (error) {
		if (error) {
			return dispatch(getCartFail(error.message));
		}
		return dispatch(getCartFail(error.Error));
	}
};

export const clearCart = (token) => async (dispatch) => {
	try {
		dispatch(clearCartPending());
		await clearUseCart(token);
		dispatch(clearCartSuccess());
	} catch (error) {
		if (error) {
			return dispatch(clearCartFail(error.message));
		}
		return dispatch(clearCartFail(error.Error));
	}
};
