/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Carousel } from 'flowbite-react';
import { RiCloseLine } from 'react-icons/ri';
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
import LoadingSpinner from '../components/LoadingSpinner';

export const ProductPage = () => {
	const [availableProducts, setAvailableProducts] = useState([]);
	const { products } = useSelector((state) => state.products || {});
	const { loading } = useSelector((state) => state.products || {});
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [isOpen, setIsOpen] = useState(true);

	const location = useLocation();
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(location.search);
	const searchQuery = searchParams.get('search');

	const dispatch = useDispatch();

	const handleClose = () => {
		setIsOpen(false);
		setSelectedCategory('All');
		dispatch(fetchAvailableProducts());
	};

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAvailableProducts());
	}, [dispatch]);

	useEffect(() => {
		if (products && products?.items) {
			const filteredProducts = products?.items.filter((product) =>
				product.productName.includes(searchQuery)
			);
			setAvailableProducts(filteredProducts);
			const cleanURL = window.location.href.split('?')[0];
			history.replaceState(null, null, cleanURL);
		}

		if (searchQuery === null && products && products?.items) {
			setAvailableProducts(products.items);
		}
	}, [products, products.items, searchQuery]);

	const filteredProducts =
		selectedCategory === 'All'
			? availableProducts
			: availableProducts.filter(
					(item) => item.Category.name === selectedCategory
			  );

	const getallproducts =
		selectedCategory === 'All'
			? products.items
			: products.items.filter(
					(item) => item.Category.name === selectedCategory
			  );

	const handleSearch = (value) => {
		const searchURL = new URLSearchParams(location.search);
		searchURL.set('search', value);
		navigate(`${location.pathname}?${searchURL}`);
		dispatch(fetchAvailableProducts());
	};

	return (
		<div className="flex flex-col space-y-5">
			<div className=" flex flex-col w-screen h-screen overflow-x-hidden">
				<Topnav
					displaySearchBar
					handleSearch={handleSearch}
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
					<h3 className="w-full font-bold text-3xl">
						Todays Best Deals for You!
					</h3>
					{isOpen ? (
						<>
							<div className="grid grid-cols-2 middle:flex  gap-5 middle:w-full">
								<Button
									label="All"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'All'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('All')}
								/>
								<Button
									label="clothes"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'clothes'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('clothes')}
								/>
								<Button
									label="electronics"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'electronics'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('electronics')}
								/>
								<Button
									label="food"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'food'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('food')}
								/>
								<Button
									label="fashion"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'fashion'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('fashion')}
								/>
							</div>
							<div className="w-full my-5 mx-auto">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
									{!loading && filteredProducts?.length === 0 && (
										<div className="flex justify-center items-center space-x-5">
											<h1 className="  text-rosy_brown font-bold">
												No Product Found !
											</h1>
											<button
												type="submit"
												className={`   text-rosy_brown font-bold  ${
													selectedCategory === 'All'
												} `}
												onClick={handleClose}
											>
												<RiCloseLine size={30} />
											</button>
										</div>
									)}
									{loading ? (
										<div>
											<div className="w-full h-full flex items-center justify-center mx-auto my-4 bg">
												<LoadingSpinner className="w-9 h-9 mr-2 text-gray-200 animate-spin fill-primaryGreen" />
											</div>
										</div>
									) : (
										filteredProducts?.map((item) => (
											<ProductCard key={item.productId} product={item} />
										))
									)}
								</div>
							</div>
						</>
					) : (
						<>
							<div className="grid grid-cols-2 middle:flex  gap-5 middle:w-full">
								<Button
									label="All"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'All'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('All')}
								/>
								<Button
									label="clothes"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'clothes'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('clothes')}
								/>
								<Button
									label="electronics"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'electronics'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('electronics')}
								/>
								<Button
									label="food"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'food'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('food')}
								/>
								<Button
									label="fashion"
									className={`flex items-center justify-center p-1 rounded-2xl ${
										selectedCategory === 'fashion'
											? 'bg-primaryGreen text-white'
											: 'bg-brightGray text-black'
									} my-4  w-28`}
									onClick={() => setSelectedCategory('fashion')}
								/>
							</div>
							<div className="w-full my-5 mx-auto">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
									{loading ? (
										<div>
											<div className="w-full h-full flex items-center justify-center mx-auto my-4 bg">
												<LoadingSpinner className="w-9 h-9 mr-2 text-gray-200 animate-spin fill-primaryGreen" />
											</div>
										</div>
									) : (
										getallproducts?.map((item) => (
											<ProductCard key={item.productId} product={item} />
										))
									)}
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};
