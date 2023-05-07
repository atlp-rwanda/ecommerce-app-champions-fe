/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			font: ['Inter', 'sans-serif'],
		},
		fontWeight: { bold: '700', medium: '500', normal: '400' },
		screens: {
			sm: '480px',
			samsung: '359px',
			iphoneSE: '375px',
			middle: '376px',
			md: '768px',
			lg: '976px',
			xd: '1279',
			xl: '1440px',
		},
		separator: '-',
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
				'8xl': '4rem',
			},
			colors: {
				transparent: 'transparent',
				primaryGreen: '#225F33',
				secondaryGreen: '#92E3A9',
				lightRed: '#BA6E6E',
				black: '#2D2D2D',
				yellow: '#DAAB33',
				secondary: 'rgba(217, 204, 159, 0.75)',
				brightGray: 'rgba(217, 217, 217, 0.3)',
				white: '#fff',
				wheat: '#D9CC9F',
				gray85: '#D9D9D9',
				grayish_blue: '#2F2E41',
				oxford_blue: '#263238',
				cyan_lime_green: '#92E3A9',
				gray33: '#545454',
				red: '#ff0000',
				rosy_brown: '#A0616A',
				blue: '#1fb6ff',
				lightBlue: '#4E5BD7',
			},
		},
	},
	plugins: [],
};
