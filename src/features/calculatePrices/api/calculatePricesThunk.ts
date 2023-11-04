import { createAsyncThunk } from '@reduxjs/toolkit';

export const calculatePricesThunk = createAsyncThunk(
	'calculatePrices',
	async (_, thunkAPI) => {}
);
