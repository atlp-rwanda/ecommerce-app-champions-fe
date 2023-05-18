import { allRoles, newRole, assignRole, destroyRole } from '../../api/roleapi';
import {
	getRolesPending,
	getRolessSuccess,
	getRolesFail,
	newRolePending,
	newRoleSuccess,
	newRoleFail,
	assignRolePending,
	assignRoleSuccess,
	assignRoleFail,
	deleteRolePending,
	deleteRoleSuccess,
	deleteRoleFail,
} from '../reducers/role/roleSlice';

export const getAllRoles = (token) => async (dispatch) => {
	try {
		dispatch(getRolesPending());
		const res = await allRoles(token);
		dispatch(getRolessSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(getRolesFail(error.message));
		}
		return dispatch(getRolesFail(error.Error));
	}
};

export const createRole = (token, data) => async (dispatch) => {
	try {
		dispatch(newRolePending());
		const res = await newRole(token, data);
		dispatch(newRoleSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(newRoleFail(error.message));
		}
		return dispatch(newRoleFail(error.Error));
	}
};

export const assignRoleToUser = (token, id, data) => async (dispatch) => {
	try {
		dispatch(assignRolePending());
		const res = await assignRole(token, id, data);
		dispatch(assignRoleSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(assignRoleFail(error.message));
		}
		return dispatch(assignRoleFail(error.Error));
	}
};

export const deleteRole = (token, roleId) => async (dispatch) => {
	try {
		dispatch(deleteRolePending());
		const res = await destroyRole(token, roleId);
		dispatch(deleteRoleSuccess(res));
		return res;
	} catch (error) {
		if (error) {
			return dispatch(deleteRoleFail(error.message));
		}
		return dispatch(deleteRoleFail(error.Error));
	}
};
