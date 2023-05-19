import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import { AiOutlineLogout } from 'react-icons/ai';
import LoadingSpinner from '../LoadingSpinner';
import { handleToken } from '../../redux/actions/token.action';
import Button from '../Button/Button';
import { trackOrderState } from '../../redux/actions/trackOrder.action';
import Logo from '../../assets/Logo.svg';

const TrackOrder = () => {
	const dispatch = useDispatch();
	// const { token, decodedToken } = useSelector((state) => state.token);
	const token = Cookies.get('token'); // Replace 'token' with the actual cookie name or source of the token

	let decodedToken = null;
	if (token) {
		decodedToken = jwt_decode(token);
	}

	const [orders, setOrders] = useState([
		{ productName: 'juice', amount: 1234, status: 'pending' },
		{ productName: 'mango', amount: 1234, status: 'pending' },
		{ productName: 'phone', amount: 1234, status: 'paid' },
		{ productName: 'mango', amount: 1234, status: 'pending' },
		{ productName: 'phone', amount: 1234, status: 'paid' },
	]);
	console.log('i am decoded token', decodedToken);

	useEffect(() => {
		dispatch(trackOrderState(token));
	}, [dispatch, token]);

	return (
		<div className="div">
			<div className="flex items-center justify-between w-screen py-4 md:w-full bg-lightYellow px-7">
				<img src={Logo} className="w-32 cursor-pointer md:w-40" alt="Logo" />
				<AiOutlineLogout
					size={25}
					className="cursor-pointer text-primaryGreen"
					onClick={Cookies.remove('token', {
						path: '/',
						domain: 'https://ecommerce-app-champions-fe.vercel.app',
					})}
				/>
			</div>
			<div className="w-2/3 p-5 m-20 bg-lightGray">
				<div className="">My Orders</div>
				<div className="flex justify-between w-2/3 mt-10 ml-5 border-b border-black">
					<div>Product</div>
					<div>Amount</div>
					<div>Status</div>
				</div>
				<ol className="overflow-y-scroll list-decimal">
					{orders.map((order, index) => (
						<li className="flex justify-between w-2/3 mt-10 ml-5" key={index}>
							<div className="w-16 ml-2">{order.productName}</div>
							<div className="w-16 ml-2">{order.amount}</div>
							<div className="w-16 ml-2">{order.status}</div>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default TrackOrder;
