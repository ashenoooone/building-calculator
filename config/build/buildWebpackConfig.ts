import {BuildOptions} from "./types";
import {WebpackConfiguration} from "webpack-cli";
import {buildWebpackPlugins} from "./buildWebpackPlugins";
import {buildWebpackResolvers} from "./buildWebpackResolvers";
import {buildWebpackLoaders} from "./buildWebpackLoaders";
import {buildDevServer} from "./buildDevServer";

export default (options: BuildOptions): WebpackConfiguration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildWebpackPlugins(options),
    resolve: buildWebpackResolvers(options),
    module: {
      rules: buildWebpackLoaders(options)
    },
    devServer: options.mode === 'development' ? buildDevServer(options) : undefined
  }
}