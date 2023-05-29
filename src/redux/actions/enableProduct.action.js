import { toast } from 'react-toastify';
import {
	enablePending,
	enableSuccess,
	enableFail,
} from '../reducers/product/enableProductSlice';
import { enableProduct } from '../../api/productApi';

export const enableProducts = (id, token) => async (dispatch) => {
	try {
		dispatch(enablePending());
		const res = await enableProduct(id, token);
		dispatch(enableSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			toast.error(`${error.message}`, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(enableFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(enableFail(error.Error));
	}
};
