/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { fetchAvailableProducts } from '../../redux/actions/product.action';
import Button from '../Button/Button';
import LoadingSpinner from '../LoadingSpinner';
import ProductCard from '../product/ProductCard';

const Homeproduct = () => {
	const { t } = useTranslation();
	const [availableProducts, setAvailableProducts] = useState([]);
	const { products } = useSelector((state) => state.products || {});
	const { loading } = useSelector((state) => state.products || {});
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [isOpen, setIsOpen] = useState(true);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchQuery = searchParams.get('search');

	const dispatch = useDispatch();

	const handleClose = () => {
		setIsOpen(false);
		setSelectedCategory('All');
		dispatch(fetchAvailableProducts());
	};

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

	const product = availableProducts ? availableProducts.slice(0, 8) : [];

	const filteredProducts =
		selectedCategory === 'All'
			? product
			: product.filter((item) => item?.Category?.name === selectedCategory);

	const allproducts = products.items ? products.items.slice(0, 8) : [];
	const getallproducts =
		selectedCategory === 'All'
			? allproducts
			: allproducts.filter((item) => item.Category.name === selectedCategory);

	return (
		<div className="w-full mx-auto px-8 py-4 ">
			<h3 className="w-full font-bold text-3xl">{t('deal')}</h3>
			{isOpen ? (
				<>
					<div className="grid grid-cols-2 middle:flex  gap-5 middle:w-full">
						<Button
							label={t('All')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'All'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('All')}
						/>
						<Button
							label={t('clothes')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'clothes'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('clothes')}
						/>
						<Button
							label={t('electronics')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'electronics'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('electronics')}
						/>
						<Button
							label={t('food')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'food'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('food')}
						/>
						<Button
							label={t('fashion')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'fashion'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('fashion')}
						/>

						<Link
							to="/product"
							className="text-yellow font-bold underline flex items-center justify-center"
						>
							{t('seeall')}
						</Link>
					</div>
					<div className="w-full my-5 mx-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
							{!loading && filteredProducts?.length === 0 && (
								<div className="flex justify-center items-center space-x-5">
									<h1 className="  text-rosy_brown font-bold">
										{t('Notfound')}
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
							label={t('All')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'All'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('All')}
						/>
						<Button
							label={t('clothes')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'clothes'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('clothes')}
						/>
						<Button
							label={t('electronics')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'electronics'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('electronics')}
						/>
						<Button
							label={t('food')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'food'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('food')}
						/>
						<Button
							label={t('fashion')}
							className={`flex items-center justify-center p-1 rounded-2xl ${
								selectedCategory === 'fashion'
									? 'bg-primaryGreen text-white'
									: 'bg-brightGray text-black'
							} my-4  w-28`}
							onClick={() => setSelectedCategory('fashion')}
						/>
						<Link
							to="/product"
							className="text-yellow font-bold underline flex items-center justify-center"
						>
							{t('seeall')}
						</Link>
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
	);
};
export default Homeproduct;
