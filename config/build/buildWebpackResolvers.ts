import path from 'path';
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types';

export const buildWebpackResolvers = (options: BuildOptions): ResolveOptions => {
	return {
		preferAbsolute: true,
		alias: {
			'~': path.resolve(__dirname, './src')
		},
		modules: [options.paths.src, 'node_modules'],
		extensions: ['.tsx', '.ts', '.js', '.scss'],
		mainFiles: ['index']
	};
};
