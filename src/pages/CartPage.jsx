import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/cart/CartItem';
import CartCheckout from '../components/cart/CartCheckout';
import { handleToken } from '../redux/actions/token.action';
import { getCart, clearCart } from '../redux/actions/cart.action';

const CartPage = () => {
	const { token } = useSelector((state) => state.token);
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart(token));
	};
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	useEffect(() => {
		if (token) {
			dispatch(getCart(token));
		}
	}, [dispatch, token]);
	return (
		<div className="w-screen overflow-x-hidden bg-lightGray h-screen">
			<h1 className="text-black text-center font-bold text-2xl py-4">
				Cart Items
			</h1>
			<div className="flex flex-col md:flex-row space-x-5 space-y-2 md:space-y-0 mx-auto w-11/12">
				<div className="flex flex-col mx-auto space-y-3 w-full">
					{cartItems?.data?.products.map((product) => (
						<CartItem key={product.productId} product={product} />
					))}
				</div>
				<CartCheckout handleClearCart={handleClearCart} />
			</div>
		</div>
	);
};

export default CartPage;
