/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import {
	GridComponent,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from '@syncfusion/ej2-react-grids';
import { GrAddCircle } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import SearchComponent from '../product/SearchProduct';
import Header from '../vendorDashboard/Header';
import {
	fetchProducts,
	deleteProduct,
} from '../../redux/actions/product.action';

import Button from '../Button/Button';

function Products({ setIsOpen }) {
	const dispatch = useDispatch();
	const { loading, error, items } = useSelector(
		(state) => state.products.products
	);
	const [searchResults, setSearchResults] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const navigate = useNavigate();

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

	const handleEmptySearch = () => {
		setSearchResults(null);
	};

	return (
		<div className="sales dahsboard m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			{loading ? (
				<div>Loading ..</div>
			) : (
				<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
					<Header title="All Products" />
					<div className="overflow-x-auto">
						{items && (
							<SearchComponent
								searchedItems={(items) => {
									setSearchResults(items);
								}}
								onEmptySearch={handleEmptySearch}
							/>
						)}
						<button className="add rounded-[50px] px-[1.5em] py-[0.5em] bg-primaryGreen w-[200px] text-[#92E3A9] font-bold p-[20px],inset_0px_2px_1px_0px_rgba(255,255,255,0.75)] hover:bg-emerald-500  samsung:relative samsung:left-[-15px]">
							Add Product
						</button>
						<GridComponent allowPaging allowSorting id="gridcomp">
							<table className="w-full">
								<tbody>
									<tr className="p-4 text-xl font-bold md:text-2xl h-14">
										<td className="text-xl md:text-2xl">Product Name</td>
										<td>Product Id</td>
										<td>Quantity</td>
										<td>Price</td>
										<td>Edit</td>
										<td>Delete</td>
									</tr>
									{searchResults && searchResults?.length ? (
										searchResults?.map((item) => (
											<tr key={item.productId} className="h-20">
												<td>{item.productName}</td>
												<td>{item.productId}</td>
												<td>{item.quantity}</td>
												<td>{item.productPrice}</td>
												<td>
													<MdEdit
														className="text-blue-500 cursor-pointer"
														onClick={() =>
															navigate(`/vendors/${item.productId}`)
														}
													/>
												</td>
												<td>
													<MdOutlineDeleteOutline
														className="text-red-500 cursor-pointer"
														onClick={() => setSelectedProduct(item)}
													/>
												</td>
												<td>
													<Link to={`/productPage/${item.productId}`}>
														<FaEye
															className="text-red-500 cursor-pointer rosy_brown rounded  h-5"
															style={{ color: 'rosybrown' }}
														/>
													</Link>
												</td>
											</tr>
										))
									) : searchResults && !searchResults?.length ? (
										<div className="font-bold text-lg py-5 text-red">
											No products found!
										</div>
									) : (
										items?.map((item) => (
											<tr key={item.productId} className="h-20">
												<td>{item.productName}</td>
												<td>{item.productId}</td>
												<td>{item.quantity}</td>
												<td>{item.productPrice}</td>
												<td>
													<BiEdit
														className="edit text-blue-600 mr-2 cursor-pointer size={24}"
														onClick={() =>
															navigate(`/vendors/${item.productId}`)
														}
													/>
												</td>
												<td>
													<AiFillDelete
														className="delete text-red-600 cursor-pointer"
														onClick={() => setSelectedProduct(item)}
													/>
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
							<Inject
								services={[
									Resize,
									Sort,
									ContextMenu,
									Filter,
									Page,
									ExcelExport,
									Edit,
									PdfExport,
								]}
							/>
						</GridComponent>
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
