import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export function createReduxStore(initialState?: StateSchema) {
	const store = configureStore({
		reducer: combineReducers<StateSchema>({}),
		devTools: __IS_DEV__,
		preloadedState: initialState
	});

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
