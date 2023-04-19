import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/product/productSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  product: productSlice,
});

export default rootReducer;
