import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StepsSchema } from '../types';
import { fetchSteps } from '../../api/fetchSteps';

const initialState: StepsSchema = {
	data: {
		steps: [],
		currentStep: 0
	},
	error: null,
	isLoading: false
};

export const stepsSlice = createSlice({
	name: 'stepsSlice',
	initialState,
	reducers: {
		setCurrentStep: (state, action: PayloadAction<number>) => {
			state.data.currentStep = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSteps.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(fetchSteps.pending, (state, action) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(fetchSteps.fulfilled, (state, action) => {
			state.data.steps = action.payload;
			state.isLoading = false;
			state.error = null;
		});
	}
});

export const { actions: stepsActions } = stepsSlice;
export const { reducer: stepsReducer } = stepsSlice;
