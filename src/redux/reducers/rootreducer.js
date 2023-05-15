import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './auth/loginSlice';
import cartSlice from './cart/cartSlice';
import registerSlice from './auth/authRegisterSlice';
import password from './auth/ForgotSlice';
import resetPassword from './auth/ResetPasswordSlice';
import profileSlice from './auth/profileSlice';
import authSlice from './auth/twoFactorAuthSlice';
import fetchTokenSlice from './fetchTokenSlice';
import singleProfileSlice from './auth/userProfileSlice';
import productsSlice from './product/productSlice';
import createProductSlice from './product/createProductSlice';
import updateProductSlice from './product/updateProductSlice';
import notifications from './auth/notificationSlice';
import vendorProducts from './auth/vendorProductSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	login: loginSlice,
	register: registerSlice,
	profile: profileSlice,
	userProfile: singleProfileSlice,
	token: fetchTokenSlice,
	auth: authSlice,
	password,
	resetPassword,
	products: productsSlice,
	createproduct: createProductSlice,
	updateProduct: updateProductSlice,
	notifications,
	vendorProducts,
});

export default rootReducer;
