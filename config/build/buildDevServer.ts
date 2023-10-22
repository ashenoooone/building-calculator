import { BuildOptions } from './types';

export const buildDevServer = (options: BuildOptions) => {
	return {
		historyApiFallback: true,
		port: options.port
	};
};
