/* eslint-disable consistent-return */
import {
	getRatePending,
	getRateSuccess,
	getRateFail,
} from '../reducers/review/ratingsSlice';
import { getRate } from '../../api/ratingsApi';

export const getProductRate = (productId) => async (dispatch) => {
	try {
		dispatch(getRatePending());
		const res = await getRate(productId);
		dispatch(getRateSuccess(res));
	} catch (error) {
		if (error) {
			return dispatch(getRateFail(error.message));
		}
		return dispatch(getRateFail(error.Error));
	}
};
