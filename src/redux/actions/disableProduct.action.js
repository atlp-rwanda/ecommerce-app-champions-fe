import { toast } from 'react-toastify';
import {
	disablePending,
	disableSuccess,
	disableFail,
} from '../reducers/product/disableProductSlice';
import { disableProduct } from '../../api/productApi';

export const disableProducts = (id, token) => async (dispatch) => {
	try {
		dispatch(disablePending());
		const res = await disableProduct(id, token);
		dispatch(disableSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			toast.error(`Something went wrong , Please try again `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(disableFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(disableFail(error.Error));
	}
};
