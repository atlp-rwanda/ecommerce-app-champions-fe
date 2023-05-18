/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import { addToWishList, getWishLIst } from '../../api/wishlistApi';
import {
	addToWishListFail,
	addToWishListPending,
	addToWishListSuccess,
	getWishListFail,
	getWishListSuccess,
	getWishLIstPending,
} from '../reducers/WishList/wishlistSlice';

export const addItemToWishList = (id, token) => async (dispatch) => {
	try {
		dispatch(addToWishListPending());
		const res = await addToWishList(id, token);
		dispatch(addToWishListSuccess(res));
		toast.success(`${res.message}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(addToWishListFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(addToWishListFail(error.Error));
	}
};

export const getAllWishlist = (token) => async (dispatch) => {
	try {
		dispatch(getWishLIstPending());
		const res = await getWishLIst(token);
		dispatch(getWishListSuccess(res));
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(getWishListFail(error.message));
		}
		return dispatch(getWishListFail(error.Error));
	}
};
