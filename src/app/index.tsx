import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { ThemeProvider } from './providers/theme';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
