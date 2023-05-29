/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import {
	addToWishList,
	getWishLIst,
	removeFromWishList,
} from '../../api/wishlistApi';
import {
	addToWishListFail,
	addToWishListPending,
	addToWishListSuccess,
	getWishListFail,
	getWishListSuccess,
	getWishLIstPending,
	deleteWishlistPending,
	deleteWishlistSuccess,
	deleteWishlistFail,
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
			toast.error(`${error.error}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(addToWishListFail(error.error));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(addToWishListFail(error.Error));
	}
};

export const removeItemFromWishlist = (id, token) => async (dispatch) => {
	try {
		dispatch(deleteWishlistPending());
		const res = await removeFromWishList(id, token);
		dispatch(deleteWishlistSuccess(res));
		toast.success('Product removed from wishlist', {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(deleteWishlistFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(deleteWishlistFail(error.Error));
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
