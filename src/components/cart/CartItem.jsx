import React from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
import Input from '../Auth/Input';

const CartItem = ({ product }) => {
	return (
		<div className="bg-white flex items-center justify-between space-x-2 p-2 rounded-md shadow-md">
			<div className="flex flex-row w-full space-x-3">
				<img
					src={product.productImage}
					alt=""
					className="w-36 mx-auto md:w-52 h-32 object-cover"
				/>

				<div className="flex space-y-3 w-full">
					<div className="flex flex-col  w-1/2 space-y-5">
						<h4 className="font-bold">{product.productName}</h4>
						<h3>$ {product.productPrice}</h3>
					</div>
					<div className="flex flex-col w-1/2 items-end space-y-5">
						<div className="flex items-center">
							<div className="w-8 h-8 bg-lightGray flex items-center justify-center rounded-md cursor-pointer">
								<AiOutlineLine size={12} className="" />
							</div>
							<Input
								value={product.quantity}
								className="rounded-md w-8 h-8 outline-0 text-center border border-lightGray mx-1"
							/>
							<div className="w-8 h-8 bg-lightGray flex items-center justify-center rounded-md cursor-pointer">
								<AiOutlinePlus size={12} className="" />
							</div>
						</div>
						<h3 className="flex">$ {product.productTotal}</h3>
					</div>
				</div>
			</div>
			<AiOutlineClose
				size={20}
				className=" hover:text-lightRed cursor-pointer"
			/>
		</div>
	);
};

export default CartItem;
