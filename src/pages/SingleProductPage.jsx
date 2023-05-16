/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../redux/actions/product.action';
import Button from '../components/Button/Button';
import Truck from '../assets/truck.svg';
import Return from '../assets/return.svg';

const SingleProductPage = () => {
	const { productId } = useParams();
	const { product } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSingleProduct(productId));
	}, [dispatch, productId]);
	return (
		<div className="w-screen h-screen mx-auto my-5 flex flex-col space-y-5">
			<div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-6 w-11/12 mx-auto">
				<div className="w-full md:w-2/5 h-72  md:h-96 flex flex-col space-y-2 md:space-y-3">
					<img
						src={product?.item?.productImage[0]}
						alt=""
						className="object-cover h-full w-full rounded-md"
					/>
					<div className="hidden md:flex w-full justify-between items-center">
						{product?.item?.productImage.map((img, index) => (
							<img
								src={img}
								alt=""
								key={index}
								className=" h-20 w-24 rounded-sm object-cover "
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full md:w-3/5 space-y-5">
					<h2 className="text-3xl capitalize font-bold">
						{product?.item?.productName}
					</h2>
					<p className="text-md capitalize font-normal">
						{product?.item?.productDescription}
					</p>
					<p className="text-md font-bold flex items-center">
						Price: {product?.item?.productPrice} RWF
						<span className="px-2 font-normal"> each</span>
					</p>
					<div className="border border-gray w-full opacity-60" />
					<div className="flex items-center justify-between w-full space-x-6">
						<div className="text-black font-normal">
							<p>
								Only
								<span className="text-yellow font-body px-1">
									{product?.item?.quantity} Items
								</span>
								left! Don’t miss it
							</p>
						</div>
					</div>
					<div className="flex space-x-5 items-center">
						<Button
							label="Buy Now"
							className="bg-primaryGreen text-center text-white px-2 py-1 rounded-full w-36"
						/>
						<Button
							label="Add to cart"
							className="border border-primaryGreen text-center rounded-full hover:bg-primaryGreen hover:text-white w-36 px-2 py-1"
						/>
					</div>
					<div className="bg-gray flex flex-col opacity-70 rounded-md w-full md:w-11/12 p-2 space-y-3">
						<div className="flex space-x-5">
							<img src={Truck} alt="" />
							<div className="flex flex-col">
								<h2 className="font-bold text-lg">Delivery</h2>
								<p>Delivery within less than one day</p>
							</div>
						</div>
						<div className="border border-black opacity-5" />
						<div className="flex space-x-5">
							<img src={Return} alt="" />
							<div className="flex flex-col">
								<h2 className="font-bold text-lg">Return delivery</h2>
								<p>Free 30 days delivery return</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-11/12 mx-auto">
				<h2 className="font-bold text-2xl">Similar Products</h2>
			</div>
		</div>
	);
};

export default SingleProductPage;
