/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#225F33',
			'light-red': '#BA6E6E',
			secondary: 'rgba(217, 204, 159, 0.75)',
			white: '#fff',
			black: '#2D2D2D',
		},
		extend: {},
	},
	plugins: [],
};
