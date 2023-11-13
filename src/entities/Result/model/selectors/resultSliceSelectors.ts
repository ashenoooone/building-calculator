import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';
import { getCurrentStep } from '~/entities/Step';

export const getResultSlice = (state: StateSchema) => state.resultSlice;

export const getResultSteps = createSelector(
	getResultSlice,
	(grs) => grs.steps
);

export const getResultSumm = createSelector(getResultSteps, (steps): number => {
	if (steps && steps.length > 0) {
		return steps.reduce((total, step) => {
			if (step.values && step.values.length > 0) {
				return (
					total +
					step.values.reduce(
						(stepTotal, component) => stepTotal + component.price,
						0
					)
				);
			}
			return total;
		}, 0);
	}
	return 0;
});
export const getComponentsByStep = createSelector(
	getCurrentStep,
	getResultSteps,
	(gcs, grs) => {
		return grs?.find((i) => i.order === gcs);
	}
);
