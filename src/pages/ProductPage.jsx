/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AiFillStar } from 'react-icons/ai';
import { addItemToCart } from '../redux/actions/cart.action';
import { handleToken } from '../redux/actions/token.action';
import { fetchAvailableProducts } from '../redux/actions/product.action';
import LoadingSpinner from '../components/LoadingSpinner';

export const ProductPage = () => {
	const [products, setProducts] = useState([]);
	const { items } = useSelector((state) => state.products.products);
	const { cartItems, error } = useSelector((state) => state.cart);
	const { token } = useSelector((state) => state.token);
	const [isLoading, setIsLoading] = useState(false);
	const [clickedProductId, setClickedProductId] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchAvailableProducts(token));
	}, [dispatch, token]);

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	useEffect(() => {
		if (items) {
			setProducts(items);
		}
	}, [items]);

	useEffect(() => {
		if (cartItems) {
			const timer = setTimeout(() => {
				navigate('/cart');
			}, 5000);

			return () => {
				clearTimeout(timer);
			};
		}
		if (error) {
			setIsLoading(false);
		}
	}, [cartItems, error, navigate]);

	const handleClick = async (event, productId) => {
		event.preventDefault();
		setIsLoading(true);
		setClickedProductId(productId);
		dispatch(addItemToCart(productId, token));
	};

	return (
		<div>
			<div className="h-[2715px] w-[1430px] grid grid-cols-3 gap-3 my-10 mx-10 justify-center item-center">
				{products.map((product) => (
					<div key={product.productId} className="card w-[365px] h-[552px]">
						<img
							className="h-[338px] w-[350px] bg-gray"
							src={product.productImage[0]}
							alt={product.productName}
						/>
						<div>
							<h1>{product.productName}</h1>
							<p className="font-bold">Price: ${product.productPrice}</p>
							<p>{product.productDescription}</p>
							<p>Quantity: {product.quantity}</p>
							<div className="flex gap-1">
								<AiFillStar className="text-[#225F33]" />
								<AiFillStar className="text-[#225F33]" />
								<AiFillStar className="text-[#225F33]" />
								<AiFillStar className="text-[#225F33]" />
								<AiFillStar className="text-[#000000]" />
							</div>
							<button
								type="submit"
								className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold my-2 w-28"
								onClick={(event) => handleClick(event, product.productId)}
							>
								{isLoading && clickedProductId == product.productId ? (
									<LoadingSpinner className="w-6 h-6 mr-2 text-green" />
								) : (
									'Add to Cart'
								)}
							</button>
						</div>
					</div>
				))}
			</div>
			<ToastContainer />
		</div>
	);
};
