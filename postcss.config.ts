import tailwindcss from 'tailwindcss';

module.exports = {
	plugins: [
		'postcss-preset-env',
		tailwindcss,
		require('autoprefixer'),
		require('postcss-nested')
	]
};
