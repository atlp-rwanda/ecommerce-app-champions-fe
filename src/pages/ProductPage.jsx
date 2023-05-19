/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Carousel } from 'flowbite-react';
import { AiFillStar } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { addItemToCart } from '../redux/actions/cart.action';
import { handleToken } from '../redux/actions/token.action';
import { fetchAvailableProducts } from '../redux/actions/product.action';
import LoadingSpinner from '../components/LoadingSpinner';
import Button from '../components/Button/Button';

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
		if (cartItems || error) {
			setIsLoading(false);
		}
	}, [cartItems, error, navigate]);
	const handleClick = async (event, productId) => {
		event.preventDefault();
		setIsLoading(true);
		setClickedProductId(productId);
		if (!token) {
			toast.warn('you must login to add item to cart.', {
				position: toast.POSITION.TOP_RIGHT,
			});
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(addItemToCart(productId, token));
	};

	return (
		<div className=" flex flex-col space-y-5  w-screen h-screen overflow-x-hidden">
			<Carousel className="w-11/12 mx-auto h-4/6">
				<div>
					<img
						src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
						alt="..."
						className="w-full object-cover h-full"
					/>
				</div>
				<div>
					<img
						src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
						alt="..."
						className="w-full object-cover h-full"
					/>
				</div>
				<div>
					<img
						src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
						alt="..."
						className="w-full object-cover h-full"
					/>
				</div>
				<div>
					<img
						src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
						alt="..."
						className="w-full object-cover h-full"
					/>
				</div>
				<div>
					<img
						src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
						alt="..."
						className="w-full object-cover h-full"
					/>
				</div>
			</Carousel>
			<div className="w-11/12 mx-auto h-2/6">
				<h3 className="font-bold text-2xl">Todays Best Deals for You!</h3>
				<div className="flex w-full space-x-2 md:space-x-4">
					<Button
						label="All"
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-4 w-28"
					/>
					<Button
						label="Clothes"
						className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold my-4 w-28"
					/>
					<Button
						label="Electronics"
						className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold my-4 w-28"
					/>
					<Button
						label="Food"
						className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold my-4 w-28"
					/>
					<Button
						label="Fashion"
						className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold my-4 w-28"
					/>
				</div>
				<div className="w-full my-5 mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
						{products?.map((product) => (
							<div key={product.productId} className="card">
								<div className="bg-gray relative">
									<div className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-white">
										<FiHeart className="text-lightRed" />
									</div>
									<Link to={`/product/${product.productId}`}>
										<img
											className="h-56 w-full object-cover"
											src={product.productImage[0]}
											alt={product.productName}
										/>
									</Link>
								</div>
								<div>
									<h1>{product.productName}</h1>
									<p className="font-bold">Price: ${product.productPrice}</p>
									<p>{product.productDescription.slice(0, 70)}...</p>
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
										{isLoading && clickedProductId === product.productId ? (
											<LoadingSpinner className="w-6 h-6 mr-2 text-green" />
										) : (
											'Add to Cart'
										)}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<ToastContainer />
		</div>
	);
};
