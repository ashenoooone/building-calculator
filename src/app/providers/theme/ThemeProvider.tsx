import React, {
	createContext,
	FC,
	PropsWithChildren,
	useMemo,
	useState
} from 'react';
import { THEME_KEY } from './constants';
import { ThemeProviderConfig, UseThemeProps } from './types';

const defaultContextValue: ThemeProviderConfig = null;

export const ThemeProviderContext =
	createContext<ThemeProviderConfig>(defaultContextValue);

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

		Object.entries(config.variables).map(([name, value]) =>
			root.style.setProperty(name, value)
		);

		setTheme(config.name);
		localStorage.setItem(THEME_KEY, config.name);
	};

	const value = useMemo(() => {
		return {
			theme,
			setTheme: handleThemeChange
		};
	}, [theme]);

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
};
