import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Button from '../Button/Button';

const ProductDetails = ({ product }) => {
	const formattedDate = new Date(product.expiredDate).toLocaleDateString();

	return (
		<div className="md:w-1/2 pt-0">
			<h1 className="pb-3 text-3xl capitalize font-bold md:text-4xl">
				{product.productName}
			</h1>
			<p className="text-1xl my-2 border-b py-2">
				{product.productDescription}
				<div className="flex justify-start pt-2 w-36 style=color:red">
					<AiFillStar size={25} className="text-primaryGreen cursor-pointer" />{' '}
					<AiFillStar size={25} className="text-primaryGreen cursor-pointer" />{' '}
					<AiFillStar size={25} className="text-primaryGreen cursor-pointer" />{' '}
					<AiFillStar size={25} className="text-primaryGreen cursor-pointer" />{' '}
					<AiFillStar size={25} />
				</div>
			</p>
			<p className="text-2xl font-bold my-1 py-1">${product.productPrice}</p>
			<p className="text-1xl font-medium my-1 py-1">
				Quantity:{product.quantity}
			</p>
			{product.available ? (
				<p className="text-2xl text-green-500 py-2 border-b border-lightRed">
					Available
				</p>
			) : (
				<p className="text-lg text-red-500">Out of stock</p>
			)}
			<p className="text-1xl font-medium py-2">Expiry date: {formattedDate}</p>
			<p className="text-lg">{product.bonus}</p>

			<div className="my-4">
				<h2 className="text-2xl font-bold mb-2">Reviews</h2>

				<p>No reviews yet</p>
			</div>
			<div className="flex gap-2 ">
				<Button
					label="Enable"
					className="border bg-lime-900 text-slate-50  px-6 py-1 flex items-center justify-center  rounded-full font-bold my-2 w-full"
				/>
				<Button
					label="Disable"
					className="border bg-rosy_brown text-white  px-6 py-1 flex items-center justify-center  rounded-full font-bold my-2 w-full"
				/>
			</div>
		</div>
	);
};

export default ProductDetails;
