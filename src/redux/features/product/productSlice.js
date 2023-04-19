/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../../../constants/url";

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const getAvailableProducts = createAsyncThunk('user/fetchUsers', async () => {
  const prods = await axios.get(`${url}/api/product/getAvailable`);
  return prods;
});

const productSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builer) => {
    builer.addCase(getAvailableProducts.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(getAvailableProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = '';
    });
    builer.addCase(getAvailableProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
