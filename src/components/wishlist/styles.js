/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: '5%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '50%',
		marginBottom: '5%',
		color: '#225F33',
	},
	emptyButton: {
		minWidth: '150px',
		[theme.breakpoints.down('xs')]: {
			marginBottom: '5px',
		},
		[theme.breakpoints.up('xs')]: {
			marginRight: '20px',
		},
		marginBottom: '5%',
		backgroundColor: 'white',
		color: 'black',
		'&:hover': {
			backgroundColor: 'black',
			color: 'white',
		},
	},
	checkoutButton: {
		minWidth: '150px',
		marginBottom: '5%',
		backgroundColor: '#225F33',
		'&:hover': {
			backgroundColor: 'black',
			color: 'white',
		},
	},
	link: {
		textDecoration: 'none',
		color: '#5AFF15',
		fontWeight: '100%',
	},
	cardDetails: {
		display: 'flex',
		marginTop: '10%',
		width: '100%',
		justifyContent: 'space-between',
	},
}));
