module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(189, 141, 85, 1)',
				'inverted-primary': 'white',
				'bg-color': 'rgb(217, 217, 217, 22)',
				'bg-color-inverted': '#919198',
				'input-text-color': '#787F8D',
				'secondary-color': 'rgb(89, 90, 100, 0.6)',
				'inverted-primary-color-80': 'rgba(255, 255, 255, 0.5)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
