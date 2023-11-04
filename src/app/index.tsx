import { createRoot } from 'react-dom/client';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';
import { ThemeProvider } from './providers/theme';
import './styles/index.scss';
import { StoreProvider } from './providers/StoreProvider';

const root = createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<StoreProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</StoreProvider>
		</ThemeProvider>
	</React.StrictMode>
);
