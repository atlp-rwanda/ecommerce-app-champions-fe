import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './Auth/loginSlice';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	register: registerSlice,
	login: loginSlice,
});

export default rootReducer;
