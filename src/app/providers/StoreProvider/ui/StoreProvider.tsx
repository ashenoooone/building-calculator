import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
	const { children, initialState } = props;
	const store = createReduxStore(initialState);
	const persistor = persistStore(store);
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				{children}
			</PersistGate>
		</Provider>
	);
};
