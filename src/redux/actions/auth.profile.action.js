import { toast } from 'react-toastify';
import {
	updateProfileStart,
	updateProfileSuccess,
	updateProfileFail,
} from '../reducers/auth/profileSlice';
import {
	updateBuyer,
	updateVendor,
	singleBuyerProfile,
	singleVendorProfile,
} from '../../api/userApi';
import { getStoredValues } from '../../constants/storedValues';

const { token, decodedToken } = getStoredValues();

export const updateBuyerProfile = (buyerData) => async (dispatch) => {
	try {
		dispatch(updateProfileStart());
		const res = await updateBuyer(buyerData, token, decodedToken.id);
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

export const updateVendorProfile = (vendorData) => async (dispatch) => {
	try {
		dispatch(updateProfileStart());
		const res = await updateVendor(vendorData, token, decodedToken.id);
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

export const getBuyerProfile = () => async (dispatch) => {
	try {
		dispatch(updateProfileStart());
		const res = await singleBuyerProfile(decodedToken.id);
		dispatch(updateProfileSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(updateProfileFail(error.message));
		}
		return dispatch(updateProfileFail(error.Error));
	}
};

export const getVendorProfile = () => async (dispatch) => {
	try {
		dispatch(updateProfileStart());
		const res = await singleVendorProfile(decodedToken.id);
		dispatch(updateProfileSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(updateProfileFail(error.message));
		}
		return dispatch(updateProfileFail(error.Error));
	}
};
