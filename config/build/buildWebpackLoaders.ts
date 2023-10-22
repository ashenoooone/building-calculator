import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildWebpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
	const isDev = options.mode === 'development';

	const cssLoader = {
		rules: [
			{
				test: /\.s?[ac]ss$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { modules: true } },
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	};

	const codeBabelLoader = buildBabelLoader({
		isTSX: false,
		isDev: options.mode === 'development'
	});

	const tsxBabelLoader = buildBabelLoader({
		isTSX: true,
		isDev: options.mode === 'development'
	});

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
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
