/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { getAllWishlist } from '../../redux/actions/wishList.action';
import { handleToken } from '../../redux/actions/token.action';
import WishlistItem from './wishlist/WishlistItems';
import Loader from '../vendorDashboard/Loader';
import useStyles from './styles';

const Wishlist = ({ onRemoveFromWishlist }) => {
	const navigate = useNavigate();
	const classes = useStyles();
	const { token } = useSelector((state) => state.token);
	const { wishlistItems, loading } = useSelector((state) => state.wishlist);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	const handleHome = () => {
		navigate('/');
	};

	useEffect(() => {
		if (token) {
			dispatch(getAllWishlist(token));
		}
	}, [dispatch, token]);

	const renderEmptyWishlist = () => (
		<Typography variant="subtitle1">
			You have no items in your wishlist,
			<Link className={classes.link} to="/">
				start adding some
			</Link>
			!
		</Typography>
	);

	if (!wishlistItems) return 'Loading';

	const renderWishlist = () => (
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<Grid container spacing={3}>
						{wishlistItems.wishlist.map((items) => (
							<Grid item xs={12} sm={4} key={items.productId}>
								<WishlistItem
									item={items}
									ononRemoveFromWishlist={onRemoveFromWishlist}
								/>
							</Grid>
						))}
					</Grid>
					<div className={classes.cardDetails}>
						<div>
							<Button
								className={classes.emptyButton}
								size="large"
								type="button"
								to="/"
								variant="contained"
								color="secondary"
								onClick={handleHome}
							>
								Back To Home
							</Button>
							<Button
								className={classes.checkoutButton}
								component={Link}
								to="/cart"
								size="large"
								type="button"
								variant="contained"
								color="primary"
							>
								Checkout
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h3" gutterBottom>
				Your Wishlist
			</Typography>
			{!wishlistItems.wishlist.length
				? renderEmptyWishlist()
				: renderWishlist()}
		</Container>
	);
};

export default Wishlist;
