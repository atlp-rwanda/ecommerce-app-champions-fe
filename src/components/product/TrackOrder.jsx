import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { trackOrderState } from '../../redux/actions/trackOrder.action';

const TrackOrder = () => {
	const dispatch = useDispatch();

	const [orders, setOrders] = useState([
		{ productName: 'juice', amount: 1234, status: 'pending' },
		{ productName: 'mango', amount: 1234, status: 'pending' },
		{ productName: 'phone', amount: 1234, status: 'paid' },
		{ productName: 'mango', amount: 1234, status: 'pending' },
		{ productName: 'phone', amount: 1234, status: 'paid' },
	]);

	useEffect(() => {
		dispatch(trackOrderState());
	}, [dispatch]);

	return (
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
	);
};

export default TrackOrder;
