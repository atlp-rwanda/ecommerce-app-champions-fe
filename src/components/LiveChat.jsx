/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { FiSend } from 'react-icons/fi';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button/Button';
import { getChatUsers, getChatMessages } from '../redux/actions/chat.action';
import { handleToken } from '../redux/actions/token.action';
import envKeys from '../constants/keys';

let socket;
const user = localStorage.getItem('user');
const others = JSON.parse(user)?.data.others;

const LiveChat = () => {
	const url = envKeys.APP_URL;
	const messageInput = useRef();
	const [status, setStatus] = useState('Disconnected');
	const { token, decodedToken } = useSelector((state) => state.token);
	const [messages, setMessages] = useState([]);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const navigate = useNavigate();
	const [showModel, setShowModel] = useState(true);

	if (others === 'undefined') {
		navigate('/login');
	}

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			dispatch(getChatUsers(decodedToken.id));
		}
	}, [dispatch, decodedToken, token]);

	useEffect(() => {
		socket = io(`${url}`, {
			query: others,
		});
	}, [url]);

	useEffect(() => {
		if (token) {
			dispatch(getChatMessages(token));
		}
	}, [dispatch, token]);

	useEffect(() => {
		socket.emit('joinChat', others?.firstName, () => {
			setStatus('Connected');
		});

		socket.on('message', (msg) => {
			if (msg.text === 'welcome to Our public chat') {
				// eslint-disable-next-line no-new, new-cap
				// new toast(`${msg.text}`);
			}

			setMessages((prevMessages) => [...prevMessages, msg]);
		});

		socket.on('connectedUser', (users) => {
			setOnlineUsers(users);
			setStatus('connected');
		});

		socket.on('disconnect', () => {
			setStatus('Disconnected');
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off('message');
			socket.off('connectedUser');
			socket.disconnect();
		};
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const message = messageInput.current.value;
		socket.emit('chatMessage', message);
		messageInput.current.value = '';
	};
	return (
		others &&
		showModel && (
			<div className="fixed flex p-2 pr-6 mt-12 rounded-2xl h-3/4 right-2 bg-gray">
				<div className="flex-col hidden w-full md:flex sm:w-1/3">
					<div className="flex items-center justify-center h-20 text-2xl font-bold">
						<i className="mr-2 fas fa-comments" />
						Champions
					</div>
					<div className="px-4 mt-4 mb-2 text-sm font-semibold">Status:</div>
					<div className="px-4 mb-4">{status}</div>
					<div className="px-4 mt-4 mb-2 text-sm font-semibold">
						Active Users:
					</div>
					<ul id="users" className="px-4 mb-4">
						{onlineUsers.map((onlineUser) => (
							<li key={onlineUser.id} className="flex mb-2">
								<div className="w-4 h-4 mr-2 bg-green-500 rounded-full" />{' '}
								{onlineUser.username} {onlineUser.status}
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col flex-1 h-full">
					<Button
						className="absolute top-0 right-0 font-bold"
						handleClick={() => setShowModel(false)}
						label={<RxCross2 size={36} />}
					/>
					<div className="flex items-center justify-between h-20 pt-2 pl-2 pr-4 mr-3 text-2xl font-bold bg-lightYellow">
						<div className="flex items-center">Chat</div>
					</div>

					<div className="flex-1 px-4 overflow-y-scroll bg-white rounded-bl-xl">
						{messages.map((message, index) => (
							<div key={index} id="messages" className="mb-4">
								<div className="flex justify-between mb-1">
									<span className="text-sm font-semibold">
										{message.username}
									</span>
									<span className="text-xs">{message.time}</span>
								</div>
								<div className="text-sm text-gray-700">{message.text}</div>
							</div>
						))}
					</div>

					<div className="p-4 mt-4">
						<form onSubmit={handleSubmit} className="flex">
							<input
								type="text"
								ref={messageInput}
								autoComplete="off"
								placeholder="Type your message here..."
								className="flex-1 px-4 py-2 mr-2 border border-gray-400 rounded"
							/>
							<Button
								buttontype="submit"
								label={<FiSend />}
								className="w-full p-1 my-2 font-bold rounded md:w-auto"
							/>
						</form>
					</div>
				</div>
			</div>
		)
	);
};
export default LiveChat;
