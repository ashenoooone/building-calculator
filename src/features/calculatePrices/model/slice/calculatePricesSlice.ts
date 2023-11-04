import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const calculatePricesSlice = createSlice({
	name: 'calculatePricesSlice',
	initialState,
	reducers: {}
});

export const { actions: calculatePricesSliceActions } = calculatePricesSlice;
export const { reducer: calculatePricesSliceReducer } = calculatePricesSlice;
