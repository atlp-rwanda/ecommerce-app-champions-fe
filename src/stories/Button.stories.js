import Button from '../components/Button/Button';

export default {
	tittle: 'Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		label: 'Button',
		className: 'px-8 py-1 rounded-2xl bg-primaryGreen text-white',
		primary: true,
	},
};

export const Secondary = {
	args: {
		label: 'Button',
		secondary: true,
		className: 'px-8 py-1 rounded-2xl text-black border border-primaryGreen',
	},
};

export const Danger = {
	args: {
		label: 'Button',
		className: 'px-8 py-1 rounded-2xl bg-lightRed text-white',
		secondary: true,
	},
};
