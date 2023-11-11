import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import { IStep } from '~/entities/Step/model/types';

export const fetchSteps = createAsyncThunk<IStep[], void, ThunkConfig<string>>(
	'fetchSteps',
	async (_, thunkAPI) => {
		const { dispatch, extra, rejectWithValue } = thunkAPI;
		try {
			const response = await extra.api.get<IStep[]>('/steps');
			if (!response.data) {
				throw new Error('no data');
			}
			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	}
);
