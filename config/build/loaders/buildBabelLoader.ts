export interface BuildBabelLoaderProps {
	isTSX?: boolean;
	isDev?: boolean;
}

export const buildBabelLoader = ({ isTSX, isDev }: BuildBabelLoaderProps) => {
	return {
		test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react',
						'@babel/preset-typescript'
					],
					plugins: [
						[
							'@babel/plugin-transform-typescript',
							{
								isTSX
							}
						],
						'@babel/plugin-transform-runtime',
						isDev && require.resolve('react-refresh/babel')
					].filter(Boolean)
				}
			}
		]
	};
};
