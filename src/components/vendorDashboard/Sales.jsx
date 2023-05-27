/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-js-pagination';
import Header from './Header';
import { getAllSale } from '../../redux/actions/sales.action';
import Loader from './Loader';

function Sales() {
	const dispatch = useDispatch();
	const { salesItems, loading } = useSelector((state) => state.sales);
	const token = Cookies.get('token');
	const [activePage, setActivePage] = useState(1);
	const itemsPerPage = 6;

	const indexOfLastItem = activePage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = salesItems?.data?.getSales?.slice(
		indexOfFirstItem,
		indexOfLastItem
	);

	useEffect(() => {
		if (token) {
			dispatch(getAllSale(token, activePage));
		}
	}, [dispatch, token, activePage]);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	return (
		<div className="bg-[#EEF0F2] m-2 md:m-10 mt-24 p-2 md:p-10  rounded-3xl">
			{loading ? (
				<Loader />
			) : (
				<div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
					<Header title="All Sales" />
					<div className="overflow-x-auto text-[#1C1F33]">
						<table className="w-full">
							<tbody>
								<tr className="p-4 text-xl text-[#1C1F33] md:text-2xl h-14">
									<td className="text-xl md:text-2xl">Product Name</td>
									<td>Quantity</td>
									<td>Product Price</td>
									<td>Status</td>
									<td>Time Completed</td>
								</tr>
								{currentItems?.map((item) => (
									<tr key={item.Product.productId} className="h-20">
										<td>{item.Product.productName}</td>
										<td>{item.Product.quantity}</td>
										<td>$ {item.Product.productPrice}</td>
										<td className="status text-[#4B7F52]">{item.Status}</td>
										<td>{new Date(item.createdAt).toLocaleString()}</td>
									</tr>
								))}
								{salesItems?.data?.getSales?.length === 0 && (
									<tr>
										<td colSpan="5" className="font-bold text-lg py-5 text-red">
											No sales available!
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
					<div className="flex justify-center">
						<Pagination
							activePage={activePage}
							itemsCountPerPage={itemsPerPage}
							totalItemsCount={salesItems?.data?.getSales?.length}
							pageRangeDisplayed={5}
							onChange={handlePageChange}
							itemClass="hover:bg-[#16C172] pagination-item text-[#4B7F52] hover:text-[#1C1F33] cursor-pointer"
							activeClass="font-bold"
							activeLinkClass="font-bold"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Sales;
