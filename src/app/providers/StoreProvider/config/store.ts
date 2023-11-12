import {
	CombinedState,
	combineReducers,
	configureStore
} from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { calculatePricesSliceReducer } from '~/features/calculatePrices';
import { $api } from '~/shared/api/api';
import { rtkApi } from '~/shared/api/rtkApi';
import { stepsReducer } from '~/entities/Step';
import { ResultSliceReducer } from '~/entities/Result';

const persistConfig: PersistConfig<
	CombinedState<StateSchema>,
	any,
	any,
	any
> = {
	key: 'app',
	storage,
	whitelist: ['resultSlice']
};

export function createReduxStore(initialState?: StateSchema) {
	const extraArg: ThunkExtraArg = {
		api: $api
	};

	const store = configureStore({
		reducer: persistReducer(
			persistConfig,
			combineReducers<StateSchema>({
				api: rtkApi.reducer,
				stepsSlice: stepsReducer,
				calculatePrices: calculatePricesSliceReducer,
				resultSlice: ResultSliceReducer
			})
		),
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
