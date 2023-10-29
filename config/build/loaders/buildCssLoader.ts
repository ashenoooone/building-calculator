import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface BuildCssLoaderProps {
	isDev?: boolean;
}

export const buildCssLoader = ({ isDev }: BuildCssLoaderProps) => {
	return {
		rules: [
			{
				test: /\.s?[ac]ss$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { modules: { auto: /\w+\.module\.\w+$/i } }
					},
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	};
};
