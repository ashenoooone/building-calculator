import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildOptions } from './types';

export const buildWebpackPlugins = (
	options: BuildOptions
): webpack.WebpackPluginInstance[] => {
	const plugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: options.paths.html,
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			__API__: JSON.stringify(options.apiUrl)
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(options.mode === 'development'),
			__API__: JSON.stringify(options.apiUrl)
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true
				},
				mode: 'write-references'
			}
		})
	];

	if (options.mode === 'development') {
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return plugins;
};
