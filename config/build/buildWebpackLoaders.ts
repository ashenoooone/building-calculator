import webpack from 'webpack';
import { BuildOptions } from './types';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildWebpackLoaders = (
	options: BuildOptions
): webpack.RuleSetRule[] => {
	const cssLoader = buildCssLoader({ isDev: options.mode === 'development' });

	const codeBabelLoader = buildBabelLoader({
		isTSX: false,
		isDev: options.mode === 'development'
	});

	const tsxBabelLoader = buildBabelLoader({
		isTSX: true,
		isDev: options.mode === 'development'
	});

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff|eot)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	};

	const svgLoader = {
		rules: [
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack']
			}
		]
	};

	return [fileLoader, cssLoader, codeBabelLoader, tsxBabelLoader, svgLoader];
};
