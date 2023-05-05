import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './auth/loginSlice';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authRegisterSlice';
import password from './auth/ForgotSlice';
import resetPassword from './auth/ResetPasswordSlice';
import profileSlice from './auth/profileSlice';
import authSlice from './auth/twoFactorAuthSlice';
import fetchTokenSlice from './fetchTokenSlice';
import singleProfileSlice from './auth/userProfileSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	login: loginSlice,
	register: registerSlice,
	profile: profileSlice,
	userProfile: singleProfileSlice,
	token: fetchTokenSlice,
	auth: authSlice,
	password,
	resetPassword,
});

export default rootReducer;
