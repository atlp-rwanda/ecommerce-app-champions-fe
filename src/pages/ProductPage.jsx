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
import { FiHeart } from 'react-icons/fi';
import { addItemToCart } from '../redux/actions/cart.action';
import { handleToken } from '../redux/actions/token.action';
import { fetchAvailableProducts } from '../redux/actions/product.action';
import LoadingSpinner from '../components/LoadingSpinner';
import shoe from '../assets/shoe.png';
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
		dispatch(addItemToCart(productId, token));
	};

	return (
		<div>
			<div className=" flex  bg-[#D9CC9F] w-[1440px] h-[500px] mt-[0px]">
				<div className="h-[99px] w-[517px] pl-[89px] pt-[210px] text-white font-inter font-bold text-5xl leading-12">
					<p>
						Upgrade your footwear collection with our
						<br />
						amazing deals on men's shoes
					</p>
					<Button
						label="More"
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-4 w-28"
					/>
				</div>
				<div className="">
					<img
						src={shoe}
						alt="back ground"
						className="w-[700px] h-[500px] pl-[250px] "
					/>
				</div>
			</div>
			<h3 className="ml-[70px] mt-10 font-bold">Todays Best Deals for You!</h3>
			<div className="flex w-[1440px] gap-5 justify-around">
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
			<div className="grid grid-cols-3 gap-20 my-10 mx-10 justify-center item-center">
				{products.map((product) => (
					<div key={product.productId} className="card w-[365px] h-[552px]">
						<div className="bg-gray relative">
							<div className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-white">
								<FiHeart className="text-red" />
							</div>
							<img
								className="h-[330px] w-full bg-gray"
								src={product.productImage[0]}
								alt={product.productName}
							/>
						</div>
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
