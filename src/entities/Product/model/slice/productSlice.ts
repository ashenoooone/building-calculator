import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
  },
});

export const { actions: ProductSliceActions } = ProductSlice;
export const { reducer: ProductSliceReducer } = ProductSlice;
