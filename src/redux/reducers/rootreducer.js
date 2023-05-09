/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './auth/authLoginSlice';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authRegisterSlice';
import password from './auth/ForgotSlice';
import resetPassword from './auth/ResetPasswordSlice';
import authSlice from './auth/twoFactorAuthSlice';
import createProductSlice from './product/createProductSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	login: loginSlice,
	password,
	resetPassword,
	register: registerSlice,
	auth: authSlice,
	createproduct: createProductSlice,
});

export default rootReducer;
