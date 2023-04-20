import React from 'react';

const ProductCard = ({ item }) => {
	return (
		<div key={item.productId} className="bg-slate-50 w-6/12 my-5 mx-auto">
			<img src={item.productImage[0]} alt="" />
			<h2>{item.productName}</h2>
		</div>
	);
};

export default ProductCard;
