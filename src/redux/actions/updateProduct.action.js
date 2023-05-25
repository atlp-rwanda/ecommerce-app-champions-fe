import { toast } from 'react-toastify';

import {
	updatePending,
	updateSuccess,
	updateFail,
} from '../reducers/product/updateProductSlice';

import { updateProduct } from '../../api/productApi';

export const updateExistingProduct = (id, data, token) => async (dispatch) => {
	try {
		dispatch(updatePending());
		const res = await updateProduct(id, data, token);
		dispatch(updateSuccess(res));
		toast.success('Product updated sucessfully! ', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error) {
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(updateFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(updateFail(error.Error));
	}
};
