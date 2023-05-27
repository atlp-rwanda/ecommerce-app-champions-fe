/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import { getSales } from '../../api/salesapi';
import {
	getSalesPending,
	getSalesSuccess,
	getSalesFail,
} from '../reducers/sales/salesSlice';

export const getAllSale = (token) => async (dispatch) => {
	try {
		dispatch(getSalesPending());
		const response = await getSales(token);
		dispatch(getSalesSuccess(response));
	} catch (error) {
		if (error) {
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(getSalesFail(error.message));
		}
		toast.error(`${error.message} `, {
			position: toast.POSITION.TOP_RIGHT,
		});
		return dispatch(getSalesFail(error.Error));
	}
};
