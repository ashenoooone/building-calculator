import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	AddComponentToStepActionPayload,
	EditStepActionPayload,
	ResultSchema,
	StepResult
} from '../types';

const initialState: ResultSchema = {
	steps: [],
	summary: 0
};

export const ResultSlice = createSlice({
	name: 'ResultSlice',
	initialState,
	reducers: {
		addToSummary: (state, action: PayloadAction<number>) => {
			state.summary += action.payload;
		},
		addStep: (state, action: PayloadAction<StepResult>) => {
			if (!state.steps.find((i) => i.order === action.payload.order)) {
				state.steps.push(action.payload);
			}
		},
		removeComponentFromStep: (
			state,
			action: PayloadAction<EditStepActionPayload>
		) => {
			const step = state.steps.find((s) => s.order === action.payload.order);
			step.values.filter((i) => i.id !== action.payload.componentId);
		},
		addComponentToStep: (
			state,
			action: PayloadAction<AddComponentToStepActionPayload>
		) => {
			const step = state.steps.find((s) => s.order === action.payload.order);
			if (step.isMultiple) {
				step.values.push(action.payload.component);
			} else {
				step.values = [action.payload.component];
			}
		}
	}
});

export const { actions: ResultSliceActions } = ResultSlice;
export const { reducer: ResultSliceReducer } = ResultSlice;
