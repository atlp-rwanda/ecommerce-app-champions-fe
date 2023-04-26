/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authSlice';
import password from './Auth/ForgotPasswordSlice';
import resetPassword from './Auth/ResetPasswordSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	register: registerSlice,
	password,
	resetPassword,
});

export default rootReducer;
