/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			color1: '#225F33',
			color2: '#D9CC9F',
			color3: '#D9D9D9',
			color4: '#BA6E6E',
			red: '#ff0000',
			wheat: '#F5DEB3',
			'rosy brown': '#BC8F8F',
			blue: '#1fb6ff',
			black: '#000000',
		},
		fontFamily: {
			font: ['Inter', 'sans-serif'],
		},
		fontWeight: {},
		fontSize: {},

		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
				'8xl': '4rem',
			},
		},
	},
	plugins: [],
};
