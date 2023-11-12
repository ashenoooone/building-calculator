import { AxiosInstance } from 'axios';
import { CalculatePricesSchema } from '~/features/calculatePrices';
import { rtkApi } from '~/shared/api/rtkApi';
import { StepsSchema } from '~/entities/Step';
import { ResultSchema } from '~/entities/Result';

export interface StateSchema {
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
	calculatePrices: CalculatePricesSchema;
	stepsSlice: StepsSchema;
	resultSlice: ResultSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
