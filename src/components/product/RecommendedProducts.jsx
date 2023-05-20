import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedProducts } from '../../redux/actions/product.action';
import LoadingSpinner from '../LoadingSpinner';
import ProductCard from './ProductCard';

const RecommendedProducts = ({ product }) => {
	const { loadRecommended, products } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRecommendedProducts(product));
	}, [dispatch, product]);
	if (loadRecommended === true) {
		return (
			<LoadingSpinner className="w-8 h-8 my-5 text-gray-200 animate-spin fill-primaryGreen" />
		);
	}
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 md:gap-3 my-4">
			{products == null && (
				<div className="font-medium text-lg">0 products</div>
			)}
			{products?.recommendedProducts?.map((prod) => (
				<ProductCard key={prod.productId} product={prod} />
			))}
		</div>
	);
};

export default RecommendedProducts;
