import React from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Auth/Input';

import { getCart, removeItem } from '../../redux/actions/cart.action';

const CartItem = ({ product }) => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.token);

	const handleRemoveItem = (productId) => {
		dispatch(removeItem(productId, token)).then(() => {
			dispatch(getCart(token));
		});
	};
	return (
		<div className="bg-white flex items-center justify-between space-x-1 md:space-x-2  p-2 rounded-md shadow-md">
			<div className="flex flex-row w-full space-x-3">
				<img
					src={product.productImage}
					alt=""
					className="w-32 mx-auto md:w-52 h-26 md:32 object-cover rounded-md"
				/>

				<div className="flex w-full">
					<div className="flex flex-col  w-1/2 space-y-5">
						<h4 className="font-bold">{product.productName}</h4>
						<h3>
							<span className="font-medium hidden md:block">Price: </span>${' '}
							{product.productPrice}
						</h3>
					</div>
					<div className="flex flex-col w-1/2 items-end space-y-5 mr-0 md:mr-4">
						<div className="flex items-center">
							<div className="w-5 h-5 md:w-8 md:h-8 bg-lightGray flex items-center justify-center rounded-md cursor-pointer">
								<AiOutlineLine size={12} className="" />
							</div>
							<Input
								value={product.quantity}
								className="rounded-md w-5 h-5 md:w-8 md:h-8 outline-0 text-center border border-lightGray mx-1"
							/>
							<div className="w-5 h-5 md:w-8 md:h-8 bg-lightGray flex items-center justify-center rounded-md cursor-pointer">
								<AiOutlinePlus size={12} className="" />
							</div>
						</div>
						<h3 className="flex">
							<span className="font-medium hidden md:block">Total: </span> ${' '}
							{product.productTotal}
						</h3>
					</div>
				</div>
			</div>
			<AiOutlineClose
				size={20}
				className=" hover:text-lightRed cursor-pointer"
				onClick={() => handleRemoveItem(product.productId)}
			/>
		</div>
	);
};

export default CartItem;
