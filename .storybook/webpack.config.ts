import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../config/build/types';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '../', 'src')
	};
	config!.resolve!.modules!.push(paths.src);
	config!.resolve!.alias = {
		...config!.resolve!.alias,
		'~': path.resolve(__dirname, '..', 'src')
	};
	config!.resolve!.modules!.push('node_modules');
	config!.resolve!.extensions!.push('.ts', '.tsx');
	config!.module!.rules!.push(buildCssLoader({ isDev: true }));
	// @ts-ignore
	config!.module!.rules = config!.module!.rules!.map(
		(item: webpack.RuleSetRule) => {
			if (/svg/.test(item.test as string)) {
				return { ...item, exclude: /\.svg$/ };
			}
			return item;
		}
	);
	config!.module!.rules!.push({
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack']
	});
	return config;
};
