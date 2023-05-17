import {
	getProductByIdPending,
	getProductByIdSuccess,
	getProductByIdFail,
} from '../reducers/product/singleProductSlice';

import productApi from '../../api/productApi';

export const getProductById = (productId, token) => async (dispatch) => {
	try {
		dispatch(getProductByIdPending());

		const product = await productApi.getProductById(productId, token);

		dispatch(getProductByIdSuccess(product));
	} catch (error) {
		dispatch(getProductByIdFail(error.message));
	}
};
