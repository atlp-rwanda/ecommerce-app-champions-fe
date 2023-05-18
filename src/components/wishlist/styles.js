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
	},
	checkoutButton: {
		minWidth: '150px',
		marginBottom: '5%',
	},
	link: {
		textDecoration: 'none',
	},
	cardDetails: {
		display: 'flex',
		marginTop: '10%',
		width: '100%',
		justifyContent: 'space-between',
	},
}));
