import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { calculatePricesSliceReducer } from '~/features/calculatePrices';
import { $api } from '~/shared/api/api';
import { rtkApi } from '~/shared/api/rtkApi';
import { stepsReducer } from '~/entities/Step';
import { ResultSliceReducer } from '~/entities/Result';

export function createReduxStore(initialState?: StateSchema) {
	const extraArg: ThunkExtraArg = {
		api: $api
	};

	const store = configureStore({
		reducer: combineReducers<StateSchema>({
			api: rtkApi.reducer,
			stepsSlice: stepsReducer,
			calculatePrices: calculatePricesSliceReducer,
			resultSlice: ResultSliceReducer
		}),
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg
				}
			}).concat(rtkApi.middleware)
	});

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
