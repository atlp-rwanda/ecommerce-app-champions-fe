import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	media: {
		height: 260,
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cartActions: {
		justifyContent: 'space-between',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
	},
	removeButton: {
		backgroundColor: '#225F33',
		color: 'white',
		'&:hover': {
			backgroundColor: 'black', // Set the background color on hover
			color: 'white', // Set the text color on hover
		},
	},
}));
