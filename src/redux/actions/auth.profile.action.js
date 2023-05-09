/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import {
	updateProfileStart,
	updateProfileSuccess,
	updateProfileFail,
} from '../reducers/auth/profileSlice';
import {
	getProfileStart,
	getProfileSuccess,
	getProfileFail,
} from '../reducers/auth/userProfileSlice';
import {
	updateBuyer,
	updateVendor,
	singleBuyerProfile,
	singleVendorProfile,
} from '../../api/userApi';

export const updateBuyerProfile =
	(buyerData, token, id) => async (dispatch) => {
		try {
			dispatch(updateProfileStart());
			const res = await updateBuyer(buyerData, token, id);
			dispatch(updateProfileSuccess(res));
			toast.success('profile updated', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return res;
		} catch (error) {
			if (error) {
				toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
				return dispatch(updateProfileFail(error.message));
			}
			toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(updateProfileFail(error.Error));
		}
	};

export const updateVendorProfile =
	(vendorData, token, id) => async (dispatch) => {
		try {
			dispatch(updateProfileStart());
			const res = await updateVendor(vendorData, token, id);
			dispatch(updateProfileSuccess(res));
			toast.success('profile updated', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return res;
		} catch (error) {
			if (error) {
				toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
				return dispatch(updateProfileFail(error.message));
			}
			toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
			return dispatch(updateProfileFail(error.Error));
		}
	};

export const getBuyerProfile = (id) => async (dispatch) => {
	try {
		dispatch(getProfileStart());
		const res = await singleBuyerProfile(id);
		dispatch(getProfileSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(getProfileFail(error.message));
		}
		return dispatch(getProfileFail(error.Error));
	}
};

export const getVendorProfile = (id) => async (dispatch) => {
	try {
		dispatch(getProfileStart());
		const res = await singleVendorProfile(id);
		dispatch(getProfileSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(getProfileFail(error.message));
		}
		return dispatch(getProfileFail(error.Error));
	}
};
