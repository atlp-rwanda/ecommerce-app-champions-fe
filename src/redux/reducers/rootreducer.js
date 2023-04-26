/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './auth/authLoginSlice';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authSlice';
import password from './Auth/ForgotPasswordSlice';
import resetPassword from './Auth/ResetPasswordSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	register: registerSlice,
	login: loginSlice,
	password,
	resetPassword,
});

export default rootReducer;
