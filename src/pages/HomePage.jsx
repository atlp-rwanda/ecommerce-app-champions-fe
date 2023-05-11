import React, { useState } from 'react';

import Header from '../components/Header';
import LiveChat from '../components/LiveChat';
import Button from '../components/Button/Button';

const HomePage = () => {
	const [showChat, setShowChat] = useState(false);

	const toggleChat = () => {
		setShowChat(!showChat);
	};
	return (
		<div className="h-full">
			<Header />
			<div className="h-3/4">
				<Button
					handleClick={toggleChat}
					label="Chat"
					className="flex items-center justify-center p-1 my-2 font-bold text-white rounded-2xl bg-primaryGreen w-28"
				/>
				{showChat && LiveChat ? <LiveChat /> : ''}
			</div>
		</div>
	);
};
export default HomePage;
