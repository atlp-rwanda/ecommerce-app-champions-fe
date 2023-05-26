import { toast } from 'react-toastify';
import {
	searchPending,
	searchSuccess,
	searchFail,
} from '../reducers/product/productSlice';
import { searchProduct } from '../../api/productApi';

export const searchProducts = (id, data, token) => async (dispatch) => {
	try {
		dispatch(searchPending());
		const res = await searchProduct(id, data, token);
		dispatch(searchSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			toast.error(`Something went wrong , Please try again `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(searchFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(searchFail(error.Error));
	}
};
