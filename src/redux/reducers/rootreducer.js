import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './auth/loginSlice';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authRegisterSlice';
import password from './auth/ForgotSlice';
import resetPassword from './auth/ResetPasswordSlice';
import profileSlice from './auth/profileSlice';
import userProfileSlice from './users/userProfileSlice';
import vendorProfileSlice from './users/vendorProfileSlice';
import authSlice from './auth/twoFactorAuthSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	login: loginSlice,
	password,
	resetPassword,
	register: registerSlice,
	userProfile: userProfileSlice,
	vendorProfile: vendorProfileSlice,
	profile: profileSlice,
	auth: authSlice,
});

export default rootReducer;
