/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { MdEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import Button from '../Button/Button';

function Products() {
	const [products, setProducts] = useState([]);

	const handleAddProduct = () => {
		const newProduct = {
			name: 'New Product',
			price: '$100',
		};
		setProducts([...products, newProduct]);
	};

	return (
		<div className="pt-40 pl-32 w-3/4 ">
			<div className=" bg-brightGray  border-0 rounded-xl py-4 mx-14  pl-5 pr-5">
				<div className="  flex justify-between  pr-20">
					<h1 className="py-4 font-bold text-4xl">All Products</h1>
					<Button
						label="Add Product"
						className="bg-primaryGreen text-white font-bold w-40 rounded-full p-1 my-2 flex justify-center items-center"
						onClick={handleAddProduct}
					/>
				</div>
				<div className="">
					<table className="w-10/12 border-1">
						<tbody className="">
							<tr className="p-10 font-bold text-2xl pl-10 pr-20 h-14">
								<td className="text-2xl">Product</td>
								<td>Price</td>
								<td>Edit</td>
								<td>Delete</td>
							</tr>
							{products.map((product, index) => (
								<tr className="h-14" key={index}>
									<td>{product.name}</td>
									<td>{product.price}</td>
									<td>
										<MdEdit /> Edit
									</td>
									<td>
										<MdOutlineDeleteOutline /> Delete
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Products;
