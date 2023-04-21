/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			forest_green: '#225F33',
			wheat: '#D9CC9F',
			gray85: '#D9D9D9',
			grayish_blue: '#2F2E41',
			oxford_blue: '#263238',
			cyan_lime_green: '#92E3A9',
			gray33: '#545454',
			red: '#ff0000',
			rosy_brown: '#A0616A',
			blue: '#1fb6ff',
			black: '#000000',
		},
		fontFamily: {
			font: ['Inter', 'sans-serif'],
		},
		fontWeight: { big: '700', med: '500', small: '400' },
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
