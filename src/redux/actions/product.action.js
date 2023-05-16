import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	deleteProductPending,
	deleteProductSuccess,
	deleteProductFail,
	getProductsPending,
	getProductsSuccess,
	getProductsFail,
	getAvailableProductsPending,
	getAvailableProductsSuccess,
	getAvailableProductsFail,
} from '../reducers/product/productSlice';

import productApi from '../../api/productApi';

export const fetchProducts = (token) => async (dispatch) => {
	try {
		dispatch(getProductsPending());

		const products = await productApi.getVendorProducts(token);

		dispatch(getProductsSuccess(products));
	} catch (error) {
		dispatch(getProductsFail(error.message));
	}
};

export const deleteProduct = (productId, token) => async (dispatch) => {
	try {
		dispatch(deleteProductPending());

		const deletedProduct = await productApi.deleteProduct(productId, token);

		dispatch(deleteProductSuccess(deletedProduct));
		toast.success('Product deleted successfully', {
			position: toast.POSITION.TOP_RIGHT,
		});
	} catch (error) {
		dispatch(deleteProductFail(error.message));
	}
};
export const fetchAvailableProducts = (token) => async (dispatch) => {
	try {
		dispatch(getAvailableProductsPending());

		const products = await productApi.getAvailableProducts(token);

		dispatch(getAvailableProductsSuccess(products));
	} catch (error) {
		dispatch(getAvailableProductsFail(error.message));
	}
};
