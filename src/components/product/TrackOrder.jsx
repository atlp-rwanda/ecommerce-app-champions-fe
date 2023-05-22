import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { AiOutlineLogout } from 'react-icons/ai';
import Loader from '../vendorDashboard/Loader';
import { trackOrderState } from '../../redux/actions/trackOrder.action';
import Logo from '../../assets/Logo.svg';

const TrackOrder = () => {
	const dispatch = useDispatch();
	const token = Cookies.get('token');
	const { orders, loading } = useSelector((state) => state.orders);

	useEffect(() => {
		dispatch(trackOrderState(token));
	}, [dispatch, token]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="div">
					<div className="flex items-center justify-between w-screen py-4 md:w-full bg-lightYellow px-7">
						<img
							src={Logo}
							className="w-32 cursor-pointer md:w-40"
							alt="Logo"
						/>
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
							<div>Amount</div>
							<div>Status</div>
						</div>
						<ol className="overflow-y-scroll list-decimal">
							{orders?.data?.getOrders?.map((order, index) => (
								<li
									className="flex justify-between w-2/3 mt-10 ml-5"
									key={index}
								>
									<div className="w-16 ml-2">{order.orderTotal}</div>
									<div className="w-16 ml-2">{order.paymentStatus}</div>
								</li>
							))}
						</ol>
					</div>
				</div>
			)}
			;
		</>
	);
};

export default TrackOrder;
