import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAvailableProducts } from '../../redux/reducers/product/productSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(getAvailableProducts());
	}, [dispatch]);
	return (
		<div>
			<h1 className="">Fetching all Products</h1>
			{product.loading && <h1>Loading...</h1>}
			{!product.loading && product.error ? (
				<div>Error: {product.error}</div>
			) : null}
			{!product.loading ? (
				<div>
					{product.products?.items?.map((item) => (
						<ProductCard key={item.productId} item={item} />
					))}
				</div>
			) : null}
		</div>
	);
};

export default ProductList;
