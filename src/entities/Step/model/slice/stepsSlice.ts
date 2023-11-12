import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StepsSchema } from '../types';
import { CURRENT_STEP_LOCAL_STORAGE_KEY } from '~/shared/consts';
import { stepsApi } from '~/entities/Step/api/stepsApi';

const initialState: StepsSchema = {
	data: {
		steps: [],
		currentStep: 0,
		isModalOpened: false
	},
	error: null,
	isLoading: false
};

export const stepsSlice = createSlice({
	name: 'stepsSlice',
	initialState,
	reducers: {
		setIsModalOpened: (state, action: PayloadAction<boolean>) => {
			state.data.isModalOpened = action.payload;
		},
		setCurrentStep: (state, action: PayloadAction<number>) => {
			state.data.currentStep = action.payload;
			localStorage.setItem(
				CURRENT_STEP_LOCAL_STORAGE_KEY,
				JSON.stringify(action.payload)
			);
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			stepsApi.endpoints.getSteps.matchRejected,
			(state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			}
		);
		builder.addMatcher(
			stepsApi.endpoints.getSteps.matchPending,
			(state, action) => {
				state.isLoading = true;
				state.error = null;
			}
		);
		builder.addMatcher(
			stepsApi.endpoints.getSteps.matchFulfilled,
			(state, action) => {
				state.data.steps = action.payload;
				state.isLoading = false;
				state.error = null;
				state.data.currentStep =
					JSON.parse(localStorage.getItem(CURRENT_STEP_LOCAL_STORAGE_KEY)) ?? 0;
			}
		);
	}
});

export const { actions: stepsActions } = stepsSlice;
export const { reducer: stepsReducer } = stepsSlice;
