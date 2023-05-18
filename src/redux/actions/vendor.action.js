import {
	getVendorsPending,
	getVendorsSuccess,
	getVendorsFail,
	enableVendorPending,
	enableVendorSuccess,
	enableVendorFail,
	disableVendorPending,
	disableVendorSuccess,
	disableVendorFail,
} from '../reducers/vendor/vendorSlice';
import { allVendors, enable, disable } from '../../api/vendorapi';

export const getAllVendors = (token) => async (dispatch) => {
	try {
		dispatch(getVendorsPending());
		const res = await allVendors(token);
		dispatch(getVendorsSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(getVendorsFail(error.message));
		}
		return dispatch(getVendorsFail(error.Error));
	}
};

export const enableVendorAccount = (token, id) => async (dispatch) => {
	try {
		dispatch(enableVendorPending());
		const res = await enable(token, id);
		dispatch(enableVendorSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(enableVendorFail(error.message));
		}
		return dispatch(enableVendorFail(error.Error));
	}
};

export const disableVendorAccount = (token, id) => async (dispatch) => {
	try {
		dispatch(disableVendorPending());
		const res = await disable(token, id);
		dispatch(disableVendorSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(disableVendorFail(error.message));
		}
		return dispatch(disableVendorFail(error.Error));
	}
};
