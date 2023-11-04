import { useQuery } from 'react-query';
import { $api } from '~/shared/api/api';
import { IStep } from '~/entities/Step/model/types';

export const useFetchSteps = () =>
	useQuery({
		queryKey: 'steps',
		queryFn: async () => {
			const response = await $api.get<IStep[]>('/steps');
			return response.data;
		}
	});
