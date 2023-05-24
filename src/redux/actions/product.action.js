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
	getrRecommenedProductsPending,
	getrRecommenedProductsSuccess,
	getrRecommenedProductsFail,
} from '../reducers/product/productSlice';

import productApi, {
	singleProduct,
	recommendedProducts,
	getAvailableProduct,
} from '../../api/productApi';

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
		toast.error(`${error.message} `, {
			position: toast.POSITION.TOP_RIGHT,
		});
		dispatch(deleteProductFail(error.message));
	}
};

export const fetchAvailableProducts = () => async (dispatch) => {
	try {
		dispatch(getAvailableProductsPending());

		const products = await getAvailableProduct();

		dispatch(getAvailableProductsSuccess(products));
	} catch (error) {
		toast.error(`${error.message} `, {
			position: toast.POSITION.TOP_RIGHT,
		});
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
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(getSingleProductFail(error.message));
		}
		return dispatch(getSingleProductFail(error.Error));
	}
};

export const getRecommendedProducts = (productName) => async (dispatch) => {
	try {
		dispatch(getrRecommenedProductsPending());
		const res = await recommendedProducts(productName);
		dispatch(getrRecommenedProductsSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(getrRecommenedProductsFail(error.message));
		}
		return dispatch(getrRecommenedProductsFail(error.Error));
	}
};
