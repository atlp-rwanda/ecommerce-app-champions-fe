/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import {
	addReviewPending,
	addReviewSuccess,
	addReviewFail,
	getReviewPending,
	getReviewSuccess,
	getReviewFail,
	updateReviewPending,
	updateReviewSuccess,
	updateReviewFail,
	deleteReviewPending,
	deleteReviewSuccess,
	deleteReviewFail,
} from '../reducers/review/reviewSlice';
import {
	productReview,
	getReview,
	updateReview,
	deleteReview,
} from '../../api/reviewsApi';

export const addReview = (token, productId, data) => async (dispatch) => {
	try {
		dispatch(addReviewPending());
		const res = await productReview(token, productId, data);
		dispatch(addReviewSuccess(res));
		toast.success(`${res.message}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(addReviewFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(addReviewFail(error.Error));
	}
};

export const getProductReview = (productId) => async (dispatch) => {
	try {
		dispatch(getReviewPending());
		const res = await getReview(productId);
		dispatch(getReviewSuccess(res));
	} catch (error) {
		if (error) {
			return dispatch(getReviewFail(error.message));
		}
		return dispatch(getReviewFail(error.Error));
	}
};

export const updateProductReview =
	(token, productId, data) => async (dispatch) => {
		try {
			dispatch(updateReviewPending());
			const res = await updateReview(token, productId, data);
			dispatch(updateReviewSuccess(res));
			toast.success(`${res.message}`, {
				position: toast.POSITION.TOP_RIGHT,
			});
		} catch (error) {
			if (error) {
				toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
				return dispatch(updateReviewFail(error.message));
			}
			toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(updateReviewFail(error.Error));
		}
	};

export const deleteProductReview = (productId, token) => async (dispatch) => {
	try {
		dispatch(deleteReviewPending());

		const res = await deleteReview(productId, token);

		dispatch(deleteReviewSuccess(res));
		toast.success(`${res.message}`, {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(deleteReviewFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(deleteReviewFail(error.Error));
	}
};
