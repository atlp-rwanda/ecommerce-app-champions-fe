/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './auth/authLoginSlice';
import cartSlice from './cart/cartSlice';
import registerSlice from './auth/authRegisterSlice';
import password from './auth/ForgotSlice';
import resetPassword from './auth/ResetPasswordSlice';
import authSlice from './auth/twoFactorAuthSlice';
import productsSlice from './product/productSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	login: loginSlice,
	password,
	resetPassword,
	register: registerSlice,
	auth: authSlice,
	products: productsSlice,
});

export default rootReducer;
