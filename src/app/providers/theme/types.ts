export interface UseThemeProps {
	variables: Record<string, string>;
	name: string;
}
export interface ThemeProviderConfig {
	theme: string | null;
	setTheme: (config: UseThemeProps) => void;
}