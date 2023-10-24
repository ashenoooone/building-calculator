// eslint-disable-next-line import/no-import-module-exports
import tailwindcss from 'tailwindcss';

module.exports = {
	plugins: [
		'postcss-preset-env',
		tailwindcss,
		// eslint-disable-next-line global-require
		require('autoprefixer'),
		// eslint-disable-next-line global-require
		require('postcss-nested')
	]
};
