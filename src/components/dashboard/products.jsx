/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

import {
	fetchProducts,
	deleteProduct,
} from '../../redux/actions/product.action';
import Button from '../Button/Button';

function Products() {
	const dispatch = useDispatch();
	const { loading, error, items } = useSelector(
		(state) => state.products.products
	);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const navigate = useNavigate();
	// const { loading, error, items } = useSelector((state) => state.products);
	// const [editProduct, setEditProduct] = useState({ isOpen: false, data: {} });

	const token = Cookies.get('token');
	useEffect(() => {
		dispatch(fetchProducts(token));
	}, [dispatch, token]);

	const handleDelete = (productId) => {
		dispatch(deleteProduct(productId, token))
			.then(() => dispatch(fetchProducts(token)))
			.catch((error) => console.log(error));
		setSelectedProduct(null);
	};

	const handleCancelDelete = () => {
		setSelectedProduct(null);
	};
	if (error) {
		return <p>{error}</p>;
	}

	// const handleEditProduct = (product) => {
	// 	setEditProduct({ isOpen: true, data: product });
	// };

	return (
		<div className="container mx-auto mt-10">
			{loading ? (
				<div>Loading ..</div>
			) : (
				<div className="px-5 py-4 border-0 bg-brightGray rounded-xl">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<h1 className="py-4 text-3xl font-bold md:text-4xl">
							All Products
						</h1>
						<Button
							buttontype="submit"
							label="Add Products"
							className="w-full p-1 my-2 font-bold text-white rounded-full md:w-auto products-center bg-primaryGreen"
						/>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full border-1">
							<tbody>
								<tr className="p-4 text-xl font-bold md:text-2xl h-14">
									<td className="text-xl md:text-2xl">Product</td>
									<td>Price</td>
									<td>Edit</td>
									<td>Delete</td>
								</tr>
								{items?.map((item) => (
									<tr key={item.productId} className="h-20">
										<td>{item.productName}</td>
										<td>{item.productPrice}</td>
										<td>
											<MdEdit
												className="text-blue-500"
												onClick={() =>
													navigate(`/vendors/update/${item.productId}`)
												}
											/>
										</td>
										<td>
											<MdOutlineDeleteOutline
												className="text-red-500 cursor-pointer"
												onClick={() => setSelectedProduct(item)}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
			{selectedProduct && (
				<div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-300 bg-opacity-70">
					<div className="w-full bg-white rounded-lg shadow-xl md:w-1/2 lg:w-1/3">
						<p className="mx-5 mt-5 mb-5">
							Are you sure you want to delete {selectedProduct.productName}?
						</p>
						<div className="flex justify-end mx-5 mb-5">
							<Button
								buttontype="submit"
								label={loading ? <LoadingSpinner /> : 'Yes'}
								className="px-4 py-2 mr-2 font-bold text-white rounded-2xl bg-rosy_brown w-28"
								onClick={() => handleDelete(selectedProduct.productId)}
							/>

							<Button
								buttontype="submit"
								label={loading ? <LoadingSpinner /> : 'No'}
								className="px-4 py-2 mr-4 font-bold text-white rounded-2xl bg-primaryGreen w-28"
								onClick={handleCancelDelete}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Products;
