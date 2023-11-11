import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getCalculatePrices = (state: StateSchema) => state.calculatePrices;

export const getCalculatePricesArea = createSelector(
	getCalculatePrices,
	(gcp) => gcp.area
);

export const getCalculatePricesFloor = createSelector(
	getCalculatePrices,
	(gcp) => gcp.floor
);
