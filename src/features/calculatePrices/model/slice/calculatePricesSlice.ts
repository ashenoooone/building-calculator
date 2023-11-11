import { createSlice } from '@reduxjs/toolkit';
import { CalculatePricesSchema } from '../types';

const initialState: CalculatePricesSchema = {
	area: 0,
	floor: '1 этаж'
};

export const calculatePricesSlice = createSlice({
	name: 'calculatePricesSlice',
	initialState,
	reducers: {}
});

export const { actions: calculatePricesSliceActions } = calculatePricesSlice;
export const { reducer: calculatePricesSliceReducer } = calculatePricesSlice;
