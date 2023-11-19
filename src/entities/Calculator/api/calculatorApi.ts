import { rtkApi } from '~/shared/api/rtkApi';
import { GetCalculatorVersionReturnType } from '../model/types';

const calculatorApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCalculatorVersion: build.query<GetCalculatorVersionReturnType, void>({
			query: () => ({
				url: '/calculators/version'
			})
		})
	})
});

export const { useGetCalculatorVersionQuery } = calculatorApi;
