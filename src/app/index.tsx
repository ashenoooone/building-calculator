import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { ThemeProvider } from './providers/theme';
import './styles/index.scss';
import { StoreProvider } from './providers/StoreProvider';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<StoreProvider>
				<App />
			</StoreProvider>
		</ThemeProvider>
	</React.StrictMode>
);
