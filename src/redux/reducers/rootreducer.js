import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import registerSlice from './auth/authSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	product: productSlice,
	register: registerSlice,
});

export default rootReducer;
