import React from 'react';
import { MdEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import Button from '../Button/Button';

function Products() {
	return (
		<div className="pt-40 pl-32 w-3/4 ">
			<div className=" bg-brightGray  border-0 rounded-xl py-4 mx-14  pl-5 pr-5">
				<div className="  flex justify-between  pr-20">
					<h1 className="py-4  font-bold fontSize-100px">All Products</h1>
					<Button
						label="Add Products"
						className="bg-primaryGreen text-white font-bold w-40 rounded-full p-1 my-2 flex justify-center items-center"
					/>
				</div>
				<div className="">
					<table className="w-10/12 border-1">
						<tbody className="">
							<tr className="p-10 font-bold text-2xl pl-10 pr-20 h-14">
								<td className="text-2xl">Product</td>
								<td> price</td>
								<td> </td>
								<td> </td>
							</tr>
							<tr className="h-14">
								<td>Iphone</td>
								<td> $1200</td>
								<td>
									<MdEdit />
								</td>
								<td>
									{' '}
									<MdOutlineDeleteOutline />
								</td>
							</tr>
							<tr className="h-14">
								<td>Iphone</td>
								<td> $1200</td>
								<td>
									<MdEdit />
								</td>
								<td>
									{' '}
									<MdOutlineDeleteOutline />
								</td>
							</tr>
							<tr className="h-14">
								<td>Iphone</td>
								<td> $1200</td>
								<td>
									<MdEdit />
								</td>
								<td>
									{' '}
									<MdOutlineDeleteOutline />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Products;
