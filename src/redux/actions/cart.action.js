/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import {
	getCartPending,
	getCartSuccess,
	getCartFail,
	addToCartPending,
	addToCartSuccess,
	addToCartFail,
	clearCartPending,
	clearCartSuccess,
	clearCartFail,
	deleteProductPending,
	deleteProductSuccess,
	updateCartPending,
	updateCartSuccess,
	updateCartFail,
} from '../reducers/cart/cartSlice';
import {
	userCart,
	clearUseCart,
	deleteCartItem,
	addToCart,
	updateCartItems,
} from '../../api/cartapi';

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
export const addItemToCart = (id, token) => async (dispatch) => {
	try {
		dispatch(addToCartPending());
		const res = await addToCart(id, token);
		dispatch(addToCartSuccess(res));
		toast.success(`${res.message}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(addToCartFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(addToCartFail(error.Error));
	}
};

export const updateCart = (productId, quantity, token) => async (dispatch) => {
	try {
		dispatch(updateCartPending());
		const res = await updateCartItems(productId, quantity, token);
		dispatch(updateCartSuccess(res));
	} catch (error) {
		if (error) {
			return dispatch(updateCartFail(error.message));
		}
		return dispatch(updateCartFail(error.Error));
	}
};

export const clearCart = (token) => async (dispatch) => {
	try {
		dispatch(clearCartPending());
		const res = await clearUseCart(token);
		dispatch(clearCartSuccess(res));
		toast.success(`${res.message}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(clearCartFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(clearCartFail(error.Error));
	}
};

export const removeItem = (id, token) => async (dispatch) => {
	try {
		dispatch(deleteProductPending());

		const res = await deleteCartItem(id, token);

		dispatch(deleteProductSuccess(res));
		toast.success(`${res.message}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(clearCartFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(clearCartFail(error.Error));
	}
};
