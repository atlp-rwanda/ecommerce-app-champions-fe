import { toast } from 'react-toastify';
import { newPermission, enableDisablePermission } from '../../api/permission';
import {
	createPermissionPending,
	createPermissionSuccess,
	createPermissionFail,
	enableAndDisablePermissionPending,
	enableAndDisablePermissionSuccess,
	enableAndDisablePermissionFail,
} from '../reducers/permission/permissionSlice';

export const createPermission = (token, data) => async (dispatch) => {
	try {
		dispatch(createPermissionPending());
		const res = await newPermission(token, data);
		dispatch(createPermissionSuccess(res));
		toast.success('permission created.', {
			position: toast.POSITION.TOP_RIGHT,
		});
		return res;
	} catch (error) {
		if (error) {
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(createPermissionFail(error.message));
		}
		toast.error(`${error.Error}`, { position: toast.POSITION.TOP_RIGHT });
		return dispatch(createPermissionFail(error.Error));
	}
};

export const enableAndDisableUserPermission =
	(token, id, data) => async (dispatch) => {
		try {
			dispatch(enableAndDisablePermissionPending());
			const res = await enableDisablePermission(token, id, data);
			dispatch(enableAndDisablePermissionSuccess(res));
			toast.success('permission status changed.', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return res;
		} catch (error) {
			if (error) {
				toast.error(`${error.message} `, {
					position: toast.POSITION.TOP_RIGHT,
				});
				return dispatch(enableAndDisablePermissionFail(error.message));
			}
			toast.error(`${error.message} `, {
				position: toast.POSITION.TOP_RIGHT,
			});
			return dispatch(enableAndDisablePermissionFail(error.Error));
		}
	};
