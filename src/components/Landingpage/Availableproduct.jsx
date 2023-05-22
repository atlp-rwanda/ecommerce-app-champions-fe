import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAvailableProducts } from '../../redux/actions/product.action';
import Button from '../Button/Button';
import LoadingSpinner from '../LoadingSpinner';
import ProductCard from '../product/ProductCard';
const Homeproduct = () => {
	const [availableProducts, setAvailableProducts] = useState([]);
	const { products } = useSelector((state) => state.products || {});
	const { loading } = useSelector((state) => state.products || {});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAvailableProducts());
	}, [dispatch]);
	useEffect(() => {
		if (products) {
			setAvailableProducts(products.items);
		}
	}, [products, products.items]);
	const product = availableProducts ? availableProducts.slice(0, 8) : [];
	return (
		<div className="w-full mx-auto px-8 py-4 ">
			<h3 className="w-full font-bold text-3xl">Todays Best Deals for You!</h3>
			<div className="grid grid-cols-2 middle:flex  gap-5 middle:w-full">
				<Button
					label="All"
					className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-4  w-28"
				/>
				<Button
					label="clothes"
					className="flex items-center justify-center p-1 rounded-2xl  bg-brightGray text-black  my-4  w-28"
				/>
				<Button
					label="electronics"
					className="flex items-center justify-center p-1 rounded-2xl  bg-brightGray text-black my-4  w-28"
				/>
				<Button
					label="food"
					className="flex items-center justify-center p-1 rounded-2xl  bg-brightGray text-black my-4  w-28"
				/>
				<Link
					to="/product"
					className="text-yellow font-bold underline flex items-center justify-center"
				>
					See All
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
						product?.map((item) => (
							<ProductCard key={item.productId} product={item} />
						))
					)}
				</div>
			</div>
		</div>
	);
};
export default Homeproduct;
