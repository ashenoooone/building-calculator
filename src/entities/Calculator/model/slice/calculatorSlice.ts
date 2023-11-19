import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const CalculatorSlice = createSlice({
	name: 'CalculatorSlice',
	initialState,
	reducers: {}
});

export const { actions: CalculatorSliceActions } = CalculatorSlice;
export const { reducer: CalculatorSliceReducer } = CalculatorSlice;
