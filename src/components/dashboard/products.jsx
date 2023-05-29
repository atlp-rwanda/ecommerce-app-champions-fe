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
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import CreateProduct from '../../pages/Createproduct';
import UpdateProduct from '../../pages/UpdateProduct';
import SellerProductPage from '../../pages/SellerProductPage';
import LoadingSpinner from '../LoadingSpinner';
import SearchComponent from '../product/SearchProduct';
import Header from '../vendorDashboard/Header';
import { setUpdateProductId } from '../../redux/reducers/product/updateProductSlice';
import { setProductId } from '../../redux/reducers/product/singleProductSlice';
import { deleteProduct } from '../../redux/actions/product.action';
import { getVendorProducts } from '../../redux/actions/vendor.product';
import Loader from '../vendorDashboard/Loader';
import Button from '../Button/Button';

function Products() {
	const dispatch = useDispatch();
	const { vendorProducts, loading, error } = useSelector(
		(state) => state.vendorProducts
	);
	const [searchResults, setSearchResults] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const token = Cookies.get('token');

	const handleDelete = (productId) => {
		dispatch(deleteProduct(productId, token))
			.then(() => dispatch(getVendorProducts(token)))
			.catch((error) => error.message);
		setSelectedProduct(null);
	};

	const handleCancelDelete = () => {
		setSelectedProduct(null);
	};
	const [isAddProductVisible, setAddProductVisible] = useState(false);
	const [isUpdateProductVisible, setUpdateProductVisible] = useState(false);
	const [isSingleProductVisible, setSingleProductVisible] = useState(false);

	const handleEmptySearch = () => {
		setSearchResults(null);
	};

	const handleUpdateProduct = (id) => {
		dispatch(setUpdateProductId({ id }));
		setUpdateProductVisible(true);
	};
	const handleGetSingleProduct = (id) => {
		dispatch(setProductId({ id }));
		setSingleProductVisible(true);
	};

	return (
		<div className="dashboard m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			{loading ? (
				<Loader />
			) : (
				<div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl flex flex-col">
					<div className="flex justify-between items-center">
						<Header title="All Products" />
						<Button
							label="Add Product"
							onClick={() => setAddProductVisible(true)}
							className="bg-primaryGreen text-white rounded-2xl py-2 text-center px-5"
						/>
					</div>
					<div className="overflow-x-auto text-[#1C1F33]">
						{vendorProducts && (
							<SearchComponent
								searchedItems={(vendorProducts) => {
									setSearchResults(vendorProducts);
								}}
								onEmptySearch={handleEmptySearch}
							/>
						)}
						<table className="w-full">
							<tbody>
								<tr className="p-4 text-xl text-[#1C1F33] md:text-2xl h-14">
									<td className="text-xl md:text-2xl">Product Name</td>
									<td>Product Id</td>
									<td>Quantity</td>
									<td>Price</td>
								</tr>
								{searchResults && searchResults.length ? (
									searchResults.map((item) => (
										<tr key={item.productId} className="h-20">
											<td>{item.productName}</td>
											<td>{item.productId}</td>
											<td>{item.quantity}</td>
											<td>$ {item.productPrice}</td>
											<td>
												<MdEdit
													className="text-[#FF5A5F] cursor-pointer"
													onClick={() => handleUpdateProduct(item.productId)}
												/>
											</td>
											<td>
												<MdOutlineDeleteOutline
													className="text-red-500 cursor-pointer"
													onClick={() => setSelectedProduct(item)}
												/>
											</td>
											<td>
												{/* <Link to={`/SellerProductPage/${item.productId}`}> */}
												<FaEye
													className="  cursor-pointer "
													onClick={() => handleGetSingleProduct(item.productId)}
												/>
											</td>
										</tr>
									))
								) : searchResults && !searchResults.length ? (
									<div className="font-bold text-lg py-5 text-red">
										No products found!
									</div>
								) : (
									vendorProducts.map((item) => (
										<tr key={item.productId} className="h-20">
											<td>{item.productName}</td>
											<td>{item.productId}</td>
											<td>{item.quantity}</td>
											<td>$ {item.productPrice}</td>
											<td>
												<BiEdit
													className="edit text-[#FF5A5F] mr-2 cursor-pointer size={24}"
													onClick={() => handleUpdateProduct(item.productId)}
												/>
											</td>
											<td>
												<AiFillDelete
													className="delete text-red-600 cursor-pointer"
													onClick={() => setSelectedProduct(item)}
												/>
												{/* </td> */}
												{/* <td> */}
												{/* <Link to={`/SellerProductPage/${item.productId}`}> */}
												<FaEye
													className="  cursor-pointer "
													onClick={() => handleGetSingleProduct(item.productId)}
												/>
												{/* </Link> */}
											</td>
										</tr>
									))
								)}
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
			<div>
				{isAddProductVisible && (
					<div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 z-50 flex justify-center items-center">
						<CreateProduct setShowAddProduct={setAddProductVisible} />
					</div>
				)}
				{isUpdateProductVisible && (
					<div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 z-50 flex justify-center items-center">
						<UpdateProduct setShowUpdateProduct={setUpdateProductVisible} />
					</div>
				)}
				{isSingleProductVisible && (
					<div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 z-50 flex justify-center items-center">
						<SellerProductPage setShowSingleProduct={setSingleProductVisible} />
					</div>
				)}
			</div>
		</div>
	);
}

export default Products;
