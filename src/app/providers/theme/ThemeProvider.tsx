import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import { THEME_KEY } from './constants';
import { ThemeProviderConfig, UseThemeProps } from './types';

const defaultContextValue: ThemeProviderConfig = null;

export const ThemeProviderContext = createContext<ThemeProviderConfig>(defaultContextValue);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<string | null>(null);

	const handleThemeChange = (config: UseThemeProps) => {
		const root: HTMLElement = document.querySelector('body');

		console.log(':root', root);

		if (!root) {
			setTheme(config.name);
			localStorage.removeItem(THEME_KEY);
			throw new Error('root is undefined');
		}

		for (const variable of Object.entries(config.variables)) {
			const [name, value] = variable;
			root.style.setProperty(name, value);
		}

		setTheme(config.name);
		localStorage.setItem(THEME_KEY, config.name);
	};

	return (
		<ThemeProviderContext.Provider value={{ theme, setTheme: handleThemeChange }}>
			{children}
		</ThemeProviderContext.Provider>
	);
};