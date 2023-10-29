import { useContext } from 'react';
import {
	ThemeProviderConfig,
	ThemeProviderContext
} from '~/app/providers/theme';

export const useTheme = (): ThemeProviderConfig => {
	return useContext(ThemeProviderContext);
};
