module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	corePlugins: {
		preflight: false
	},
	theme: {
		extend: {
			gap: {
				sm: '0.5rem',
				md: '1.5rem',
				xl: '3rem'
			},
			colors: {
				'primary': 'rgb(189, 141, 85, 1)',
				'inverted-primary': 'white',
				'bg-color': 'rgb(217, 217, 217, 22)',
				'bg-color-inverted': '#919198',
				'input-text-color': '#787F8D',
				// todo секондари колор прозрачный, подобрать непрозрачный вариант
				'secondary-color': '#595a64',
				'inverted-primary-color-80': 'rgba(255, 255, 255, 0.5)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
