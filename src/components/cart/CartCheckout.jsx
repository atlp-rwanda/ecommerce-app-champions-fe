import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Auth/Input';

const CartCheckout = ({ handleClearCart }) => {
	return (
		<div className="flex flex-col w-full mx-auto md:w-2/5 space-y-4 bg-white shadow rounded-md h-80 p-5">
			<div className="flex justify-between">
				<span>Subtotal</span>
				<span>$129.99</span>
			</div>
			<div className="flex justify-between">
				<span>Shipping</span>
				<span>$5.00</span>
			</div>
			<span className="border border-gray opacity-60">{}</span>
			<div className="flex justify-between">
				<span>Total</span>
				<span className="font-bold">$134.98 USD</span>
			</div>
			<div className="flex space-x-5 items-center">
				<Input
					placeholder="Coupon code"
					label="Coupn"
					className="outline-none border border-gray p-1 rounded-md"
				/>
				<Button
					label="Apply"
					className="bg-primaryGreen text-white p-1 flex items-center justify-center  rounded-lg font-bold my-2 w-11/12"
					handleClick={handleClearCart}
				/>
			</div>

			<Link
				to="/checkout"
				className="flex items-center justify-center p-1 rounded-lg bg-primaryGreen text-white font-bold my-2 w-full"
			>
				Checkout
			</Link>
			<Button
				label="Clear Cart"
				className="border border-lightRed p-1 flex items-center justify-center  rounded-lg font-bold my-2 w-full text-black"
				handleClick={handleClearCart}
			/>
		</div>
	);
};

export default CartCheckout;
