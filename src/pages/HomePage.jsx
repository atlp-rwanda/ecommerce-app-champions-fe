/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { BsChatText } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LiveChat from '../components/LiveChat';
import Button from '../components/Button/Button';
import { handleToken } from '../redux/actions/token.action';
import Homeimage from '../assets/home.png';
import Topnav from '../components/Landingpage/topnav';
import Footer from '../components/Landingpage/Footer';
import Homeproduct from '../components/Landingpage/Availableproduct';
import Banner from '../components/Landingpage/Banner';

const HomePage = () => {
	const [showChat, setShowChat] = useState(false);
	const { token } = useSelector((state) => state.token || {});
	const dispatch = useDispatch();
	const toggleChat = () => {
		if (!token) {
			toast.warn('login first!', { position: 'top-right' });
		}
		setShowChat(!showChat);
	};

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	return (
		<div className="">
			{showChat && LiveChat ? <LiveChat /> : ''}

			<Banner />
			<div className="w-screen h-screen bg-lightYellow">
				<Topnav displaySearchBar />
				<div className="w-full px-8 h-full  flex flex-col-reverse md:flex-row justify-between items-center">
					<div className="flex flex-col space-y-4 md:space-y-7 h-1/2">
						<h1 className="text-4xl md:text-6xl text-primaryGreen font-bold">
							Shopping and Shipping Made Easier
						</h1>
						<p className="text-xl md:text-2xl">
							You can buy and sell any product on our platform easily and the
							shipping is made directly
						</p>
						<button className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-5 w-28">
							<Link to="/product">more</Link>
						</button>
					</div>
					<div className="w-full h-1/2   md:w-2/4 md:h-3/4">
						<img
							src={Homeimage}
							className=" w-full h-full  object-cover cursor-pointer"
							alt="Homeimage"
						/>
					</div>

					<div />
				</div>
			</div>

			<Homeproduct />
			<Footer />
			<Button
				handleClick={toggleChat}
				label={<BsChatText size={22} />}
				className="bg-primaryGreen fixed flex items-center justify-center w-14 h-14 font-bold text-white rounded-full bottom-4 right-4 z-50"
			/>
			<ToastContainer />
		</div>
	);
};

export default HomePage;
