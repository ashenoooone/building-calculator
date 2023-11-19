import { rtkApi } from '~/shared/api/rtkApi';
import { IStep } from '~/entities/Step';
import { FloorType } from '~/features/calculatePrices/model/types';

export interface UseGetStepProps {
	floors: FloorType;
	area: number;
	id: number;
}

export const stepsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSteps: build.query<IStep[], void>({
			query: () => ({
				url: '/steps',
				method: 'GET'
			}),
			keepUnusedDataFor: 60 * 20
		}),
		getStep: build.query<IStep, UseGetStepProps>({
			query: ({ id, floors, area }) => ({
				url: `/steps/${id}`,
				params: {
					floors,
					area
				},
				method: 'GET'
			}),
			keepUnusedDataFor: 60 * 20
		})
	})
});

export const { useGetStepsQuery, useGetStepQuery } = stepsApi;
