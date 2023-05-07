/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontFamily: {
			font: ['Inter', 'sans-serif'],
			display: ['Open Sans', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		},
		fontWeight: { bold: '700', medium: '500', normal: '400' },
		fontSize: {
			iphoneSE: ['12px', '14px'],
			middle: '15px',
			samsung: ['12px', '14px'],
		},

		screens: {
			sm: '640px',
			samsung: '359px',
			iphoneSE: '375px',
			middle: '376px',
			md: '768px',
			lg: '1024px',
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
				lightYellow: '#E2D9B7',
				darkWhite: '#F4F4F4',
				secondary: 'rgba(217, 204, 159, 0.75)',
				brightGray: 'rgba(217, 217, 217, 0.3)',
				white: '#fff',
				wheat: '#D9CC9F',
				gray: '#D9D9D9',
				lightGray: '#F6F4F4',
				grayishBlue: '#2F2E41',
				oxford_blue: '#263238',
				cyan_lime_green: '#92E3A9',
				gray33: '#545454',
				red: '#ff0000',
				rosy_brown: '#A0616A',
				blue: '#1fb6ff',
				lightBlue: '#4E5BD7',
				miniBlue: '#E5EAF9',
			},
			fontSize: {
				14: '14px',
			},
			backgroundColor: {
				'main-bg': '#FAFBFB',
				'main-dark-bg': '#20232A',
				'secondary-dark-bg': '#33373E',
				'light-gray': '#F7F7F7',
				'half-transparent': 'rgba(0, 0, 0, 0.5)',
			},
			borderWidth: {
				1: '1px',
			},
			borderColor: {
				color: 'rgba(0, 0, 0, 0.1)',
			},
			width: {
				400: '400px',
				760: '760px',
				780: '780px',
				800: '800px',
				1000: '1000px',
				1200: '1200px',
				1400: '1400px',
			},
			height: {
				80: '80px',
			},
			minHeight: {
				590: '590px',
			},
			backgroundImage: {
				'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
			},
		},
	},
	// eslint-disable-next-line import/no-unresolved
	plugins: [require('flowbite/plugin')],
};
