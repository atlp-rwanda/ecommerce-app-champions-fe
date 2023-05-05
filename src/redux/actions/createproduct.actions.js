import {
	createPending,
	createSuccess,
	createFail,
} from '../reducers/product/createProductSlice';

import { createproduct } from '../../api/productApi';

export const createnewProduct = (Data) => async (dispatch) => {
	try {
		dispatch(createPending());
		const res = await createproduct(Data);
		dispatch(createSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(createFail(error.message));
		}

		return dispatch(createFail(error.Error));
	}
};
