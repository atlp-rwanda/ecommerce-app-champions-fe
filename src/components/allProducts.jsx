import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAvailableProducts } from '../redux/reducers/product/productSlice';

const AllProducts = () => {
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAvailableProducts());
	}, []);
	return (
		<div>
			<h1 className="">All Products</h1>
			{product.loading && <h1>Loading</h1>}
			{!product.loading && product.error ? (
				<div>Error: {product.error}</div>
			) : null}
			{!product.loading ? (
				<div>
					{product.products?.items?.map((item) => (
						<div
							key={item.productId}
							className="bg-slate-50 w-6/12 my-5 mx-auto"
						>
							<img src={item.productImage[0]} />
							<h2>{item.productName}</h2>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default AllProducts;
