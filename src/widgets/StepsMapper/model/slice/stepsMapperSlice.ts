import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const StepsMapperSlice = createSlice({
	name: 'StepsMapperSlice',
	initialState,
	reducers: {}
});

export const { actions: StepsMapperSliceActions } = StepsMapperSlice;
export const { reducer: StepsMapperSliceReducer } = StepsMapperSlice;
