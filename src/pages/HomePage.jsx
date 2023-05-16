import React, { useState, useEffect } from 'react';
import { BsChatText } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import LiveChat from '../components/LiveChat';
import Button from '../components/Button/Button';
import { handleToken } from '../redux/actions/token.action';

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
		<>
			<Header />
			<div className="h-full ">
				<Button
					handleClick={toggleChat}
					label={<BsChatText />}
					className="absolute flex items-center justify-center w-10 p-1 my-2 font-bold text-black mt-15 rounded-2xl bottom-4 right-4"
				/>
				{showChat && LiveChat ? <LiveChat /> : ''}
			</div>
			<ToastContainer />
		</>
	);
};

export default HomePage;
