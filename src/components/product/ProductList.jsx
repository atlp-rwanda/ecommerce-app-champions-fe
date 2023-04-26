import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAvailableProducts } from '../../redux/reducers/product/productSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
	const dispatch = useDispatch();
	const { loading, error, products } = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(getAvailableProducts());
	}, [dispatch]);
	return (
		<div>
			<h1 className="">Fetching all Products</h1>
			{loading && <h1>Loading...</h1>}
			{!loading && error ? <div>Error: {error}</div> : null}
			{!loading ? (
				<div>
					{products?.items?.map((item) => (
						<ProductCard key={item.productId} item={item} />
					))}
				</div>
			) : null}
		</div>
	);
};

export default ProductList;
