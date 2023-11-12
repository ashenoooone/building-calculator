import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';
import { getCurrentStep } from '~/entities/Step';

export const getResultSlice = (state: StateSchema) => state.resultSlice;

export const getResultSteps = createSelector(
	getResultSlice,
	(grs) => grs.steps
);

export const getResultSummary = createSelector(
	getResultSlice,
	(grs) => grs.summary
);

export const getComponentsByStep = createSelector(
	getCurrentStep,
	getResultSteps,
	(gcs, grs) => {
		return grs.find((i) => i.order === gcs);
	}
);
