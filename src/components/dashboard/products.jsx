import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import Button from '../Button/Button';
import { fetchProducts } from '../../redux/reducers/product/productSlice';

function Products() {
	const dispatch = useDispatch();
	const { loading, error, items } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="pt-40 pl-32 w-3/4 ">
			<div className=" bg-brightGray  border-0 rounded-xl py-4 mx-14  pl-5 pr-5">
				<div className="  flex justify-between  pr-20">
					<h1 className="py-4 font-bold fontSize-120px">All Products</h1>
					<Button
						label="Add Products"
						className="bg-primaryGreen text-white font-bold w-40 rounded-full p-1 my-2 flex justify-center items-center"
					/>
				</div>
				<div>
					<table className="w-10/12 border-1">
						<tbody className="">
							<tr className="p-10 font-bold text-2xl pl-10 pr-20 h-14">
								<td className="text-2xl">Product</td>
								<td>Price</td>
								<td>Edit</td>
								<td>Delete</td>
							</tr>
							{items?.map((item) => (
								<tr key={item.productId} className="h-20 pl-10 pr-20">
									<td>{item.productName}</td>
									<td>{item.productPrice}</td>
									<td>
										<MdEdit className="text-blue-500" />
									</td>
									<td>
										<MdOutlineDeleteOutline className="text-red-500" />
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
