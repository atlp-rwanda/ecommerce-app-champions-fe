import { createSlice } from '@reduxjs/toolkit';
import authAction from '../../actions/authAction';

const initialState = {
	loading: false,
	error: null,
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setError: (state) => {
			return { ...state, error: null };
		},
	},
	extraReducers: {
		[authAction.pending]: (state) => {
			// eslint-disable-next-line no-param-reassign
			state.loading = true;
		},
		// eslint-disable-next-line consistent-return
		[authAction.rejected]: (state, { payload }) => {
			const { status, message } = payload;
			if (status === 'fail') {
				return {
					...state,
					loading: false,
					error: 'Invalid veification code number',
				};
			}
			if (message && !status) {
				return { ...state, loading: false, error: message };
			}
		},
		[authAction.fulfilled]: (state, { payload }) => {
			return {
				...state,
				loading: false,
				error: null,
				user: payload,
			};
		},
	},
});
export const { setError } = authSlice.actions;
export default authSlice.reducer;
