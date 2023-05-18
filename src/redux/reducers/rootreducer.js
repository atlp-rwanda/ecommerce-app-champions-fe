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
import searchProductSlice from './product/searchProductSlice';
import singleProductSlice from './product/singleProductSlice';
import roleSlice from './role/roleSlice';
import permissionSlice from './permission/permissionSlice';
import buyerSlice from './buyer/buyerSlice';
import vendorSlice from './vendor/vendorSlice';
import paymentSlice from './pay/paymentSlice';
import checkoutSlice from './pay/checkoutSlice';

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
	searchProduct: searchProductSlice,
	singleProduct: singleProductSlice,
	role: roleSlice,
	permission: permissionSlice,
	buyer: buyerSlice,
	vendor: vendorSlice,
	payment: paymentSlice,
	checkout: checkoutSlice,
});

export default rootReducer;
