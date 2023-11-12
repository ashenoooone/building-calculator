import { rtkApi } from '~/shared/api/rtkApi';
import { IStep } from '~/entities/Step';

export const stepsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSteps: build.query<IStep[], void>({
			query: () => ({
				url: '/steps',
				method: 'GET'
			}),
			keepUnusedDataFor: 60 * 20
		})
	})
});

export const { useGetStepsQuery } = stepsApi;
