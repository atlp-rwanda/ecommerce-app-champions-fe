import {
	getOrderPending,
	getOrderSuccess,
	getOrderFail,
} from '../reducers/product/trackOrderSlice';

import { getOrder } from '../../api/productApi';

export const trackOrderState = (token) => async (dispatch) => {
	try {
		dispatch(getOrderPending());

		const orders = await getOrder(token);

		dispatch(getOrderSuccess(orders));
	} catch (error) {
		dispatch(getOrderFail(error.message));
	}
};
