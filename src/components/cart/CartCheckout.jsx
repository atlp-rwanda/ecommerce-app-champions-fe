import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Auth/Input';

const CartCheckout = ({ handleClearCart, loading, cart }) => {
	return (
		<div className="flex flex-col w-full mx-auto  space-y-4 bg-white shadow rounded-md h-80 p-5">
			{cart.data.total > 0 && (
				<div className="flex justify-between">
					<span>Shipping</span>
					<span>$5.00</span>
				</div>
			)}
			<span className="border border-gray opacity-60">{}</span>
			<div className="flex justify-between">
				<span>Total</span>
				<span className="font-bold">$ {cart.data.total}</span>
			</div>
			<div className="flex space-x-3 items-center w-full">
				<Input
					placeholder="Coupon code"
					label="Coupn"
					className="outline-none border border-gray p-1 rounded-md w-full"
				/>
				<Button
					label="Apply"
					className="bg-primaryGreen text-white p-1 flex items-center justify-center  rounded-lg font-bold my-2 w-2/6"
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
				loading={loading}
				className="border border-lightRed p-1 flex items-center justify-center  rounded-lg font-bold my-2 w-full text-black"
				handleClick={handleClearCart}
			/>
		</div>
	);
};

export default CartCheckout;
