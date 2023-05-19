/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'flowbite-react';
import { handleToken } from '../redux/actions/token.action';
import { fetchAvailableProducts } from '../redux/actions/product.action';
import Button from '../components/Button/Button';
import Topnav from '../components/Landingpage/topnav';
import Footer from '../components/Landingpage/Footer';
import ProductCard from '../components/product/ProductCard';
import Fruits from '../assets/fruits.jpg';
import Clothes from '../assets/clothes.jpg';
import Shoes from '../assets/shoes.jpg';
import Electronics from '../assets/electronics.jpg';
import Cosmetics from '../assets/cosmetics.jpg';

export const ProductPage = () => {
	const [products, setProducts] = useState([]);
	const { items } = useSelector((state) => state.products.products);
	const { token } = useSelector((state) => state.token);

	const dispatch = useDispatch();

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

	return (
		<div className="flex flex-col space-y-5">
			<div className=" flex flex-col w-screen h-screen overflow-x-hidden">
				<Topnav
					displaySearchBar
					className="w-full bg-lightYellow px-8  flex  items-center justify-between h-16"
				/>

				<Carousel className="w-11/12 mx-auto h-full">
					<div className="h-full w-full">
						<img
							src={Electronics}
							alt="..."
							className="w-full object-cover h-full"
						/>
					</div>
					<div className="h-full w-full">
						<img
							src={Clothes}
							alt="..."
							className="w-full object-cover h-full"
						/>
					</div>
					<div className="h-full w-full">
						<img src={Shoes} alt="..." className="w-full object-cover h-full" />
					</div>
					<div className="h-full w-full">
						<img
							src={Cosmetics}
							alt="..."
							className="w-full object-cover h-full"
						/>
					</div>
					<div className="h-full w-full">
						<img
							src={Fruits}
							alt="..."
							className="w-full object-cover h-full"
						/>
					</div>
				</Carousel>
				<div className="w-full px-8 h-1/6 ">
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
								<ProductCard product={product} key={product.productId} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
