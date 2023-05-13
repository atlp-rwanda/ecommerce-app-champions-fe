import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartCheckout from '../components/cart/CartCheckout';
import { handleToken } from '../redux/actions/token.action';
import { getCart, clearCart } from '../redux/actions/cart.action';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchComponent from '../components/product/SearchProduct';

const CartPage = () => {
	const { token } = useSelector((state) => state.token);
	const { cartItems, loading } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart(token)).then(() =>
			setTimeout(() => {
				dispatch(getCart(token));
			}, 7000)
		);
	};

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	useEffect(() => {
		if (token) {
			dispatch(getCart(token));
		}
	}, [dispatch, token]);
	if (!cartItems) {
		return (
			<div className="w-screen overflow-x-hidden bg-lightGray h-screen">
				<SearchComponent />
				<h1 className="text-black text-center font-bold text-2xl py-4">
					Cart Items
				</h1>
				<h2 className="text-xl font-medium text-grayishBlue text-center">
					<LoadingSpinner className="w-16 h-16 mx-auto text-gray-200 animate-spin fill-white" />
				</h2>
			</div>
		);
	}

	if (cartItems?.data?.products?.length === 0) {
		return (
			<div className="w-screen overflow-x-hidden bg-lightGray h-screen">
				<h1 className="text-black text-center font-bold text-2xl py-4">
					Cart Items
				</h1>
				<h2 className="text-xl font-medium text-grayishBlue text-center">
					No cart Items ☹️!
				</h2>
				<div className="text-center">
					<Link to="/" className="text-lightBlue underline">
						back to product page
					</Link>
				</div>
			</div>
		);
	}

	return (
		cartItems?.data?.products?.length > 0 && (
			<div className="w-screen overflow-x-hidden bg-lightGray h-screen">
				<h1 className="text-black text-center font-bold text-2xl py-4">
					Cart Items
				</h1>
				<div className="flex flex-col w-11/12  md:flex-row space-x-0 md:space-x-5 space-y-2 md:space-y-0 mx-auto">
					<div className="flex flex-col mx-auto space-y-3 w-full md:w-3/4 ">
						{cartItems?.data?.products.map((product) => (
							<CartItem key={product.productId} product={product} />
						))}
					</div>
					<div className="flex flex-col w-full md:w-1/4">
						<CartCheckout
							handleClearCart={handleClearCart}
							loading={loading}
							cart={cartItems}
						/>
					</div>
				</div>
				<ToastContainer />
			</div>
		)
	);
};

export default CartPage;
