// import MyButton from './MyButton';
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
		className: 'bg-primary text-white',
		primary: true,
	},
};

export const Secondary = {
	args: {
		label: 'Button',
		secondary: true,
		className: 'text-black border border-primary',
	},
};

export const Danger = {
	args: {
		label: 'Button',
		className: 'bg-light-red text-white',
		secondary: true,
	},
};
