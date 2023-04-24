import MyButton from './MyButton';
// import MyButton from "./MyButton";

export default {
	tittle: 'My Button',
	component: MyButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const PrimaryButton = {
	args: {
		label: 'Button',
		backgroundColor: 'bg-primary',
		primary: true,
		color: 'text-white',
	},
};

export const SecondaryButton = {
	args: {
		label: 'Button',
		secondary: true,
		color: 'text-black',
		border: 'border border-primary',
	},
};
