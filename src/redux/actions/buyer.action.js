import { allBuyers } from '../../api/buyerapi';
import {
	getBuyersPending,
	getBuyersSuccess,
	getBuyersFail,
} from '../reducers/buyer/buyerSlice';

export const getAllBuyers = (token) => async (dispatch) => {
	try {
		dispatch(getBuyersPending());
		const res = await allBuyers(token);
		dispatch(getBuyersSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(getBuyersFail(error.message));
		}
		return dispatch(getBuyersFail(error.Error));
	}
};
