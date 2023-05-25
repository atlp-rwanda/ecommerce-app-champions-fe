import { toast } from 'react-toastify';

import {
	createPending,
	createSuccess,
	createFail,
} from '../reducers/product/createProductSlice';

import { createproduct } from '../../api/productApi';

export const createnewProduct = (Data, token) => async (dispatch) => {
	try {
		dispatch(createPending());
		const res = await createproduct(Data, token);
		dispatch(createSuccess(res));
		toast.success('Product created! check to make it available ', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error) {
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(createFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(createFail(error.Error));
	}
};
