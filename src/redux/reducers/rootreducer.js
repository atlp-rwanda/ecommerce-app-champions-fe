/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './auth/loginSlice';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authSlice';
import password from './auth/ForgotSlice';
import resetPassword from './auth/ResetPasswordSlice';
import AuthSlice from './Auth/AuthSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	login: loginSlice,
	password,
	resetPassword,
	register: registerSlice,
	login: loginSlice,
	auth: AuthSlice,
});

export default rootReducer;
