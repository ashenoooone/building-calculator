import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getStepsSlice = (state: StateSchema) => state.stepsSlice;

export const getCurrentStep = createSelector(
	getStepsSlice,
	(gss) => gss.data.currentStep ?? 0
);
export const getSteps = createSelector(
	getStepsSlice,
	(gss) => gss.data.steps ?? []
);

export const getStepsIsLoading = createSelector(
	getStepsSlice,
	(gss) => gss.isLoading
);

export const getStepsError = createSelector(getStepsSlice, (gss) => gss.error);

export const getIsStepModalOpened = createSelector(
	getStepsSlice,
	(gss) => gss.data.isModalOpened
);

export const getCurrentStepInfo = createSelector(
	getSteps,
	getCurrentStep,
	(steps, step) => {
		return steps[step - 1];
	}
);
