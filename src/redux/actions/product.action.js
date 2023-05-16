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
	getSingleProductPending,
	getSingleProductSuccess,
	getSingleProductFail,
} from '../reducers/product/productSlice';

import productApi, { singleProduct } from '../../api/productApi';

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

export const getSingleProduct = (productId) => async (dispatch) => {
	try {
		dispatch(getSingleProductPending());
		const res = await singleProduct(productId);
		dispatch(getSingleProductSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(getSingleProductFail(error.message));
		}
		return dispatch(getSingleProductFail(error.Error));
	}
};
