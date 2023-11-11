import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const ResultSlice = createSlice({
  name: 'ResultSlice',
  initialState,
  reducers: {
  },
});

export const { actions: ResultSliceActions } = ResultSlice;
export const { reducer: ResultSliceReducer } = ResultSlice;
