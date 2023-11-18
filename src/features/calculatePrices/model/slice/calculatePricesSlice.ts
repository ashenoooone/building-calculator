import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatePricesSchema, FloorType } from '../types';

const initialState: CalculatePricesSchema = {
	area: 0,
	floor: 1
};

export const calculatePricesSlice = createSlice({
	name: 'calculatePricesSlice',
	initialState,
	reducers: {
		setArea: (state, action: PayloadAction<number>) => {
			state.area = action.payload;
		},
		setFloor: (state, action: PayloadAction<FloorType>) => {
			state.floor = action.payload;
		}
	}
});

export const { actions: calculatePricesSliceActions } = calculatePricesSlice;
export const { reducer: calculatePricesSliceReducer } = calculatePricesSlice;
