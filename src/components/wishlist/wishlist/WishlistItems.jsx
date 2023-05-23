/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {
	removeItemFromWishlist,
	getAllWishlist,
} from '../../../redux/actions/wishList.action';
import { addItemToCart } from '../../../redux/actions/cart.action';
import { handleToken } from '../../../redux/actions/token.action';

import useStyles from './styles';

const WishlistItem = ({ item }) => {
	const tokenn = Cookies.get('token');
	const classes = useStyles();
	const { token } = useSelector((state) => state.token);
	const dispatch = useDispatch();
	const handleRemoveFromWishlist = (id) => {
		dispatch(removeItemFromWishlist(id, token)).then(() => {
			dispatch(getAllWishlist(token));
		});
	};

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	const handleClick = async (productId) => {
		dispatch(addItemToCart(productId, tokenn));
	};

	return (
		<Card className="cart-item">
			<ToastContainer />
			<CardMedia
				image={item.productImage[0]}
				alt={item.productName}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant="h4">{item.productName}</Typography>
				<Typography variant="h5">{item.productPrice}</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					variant="contained"
					type="button"
					className={classes.removeButton}
					onClick={() => handleRemoveFromWishlist(item.productId)}
				>
					Remove
				</Button>
				<IconButton aria-label="Add to Cart">
					<AddShoppingCart onClick={() => handleClick(item.productId)} />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default WishlistItem;
