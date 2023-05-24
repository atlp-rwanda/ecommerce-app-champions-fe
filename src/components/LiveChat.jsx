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

const others = JSON.parse(user)?.data?.others;

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
			<div className="fixed z-40 flex w-3/4 p-2 pr-3 bottom-20 rounded-2xl h-3/4 right-2 md:right-1 bg-gray md:w-1/3">
				<div className="flex-col hidden w-1/3 space-y-3 md:flex">
					<div className="text-lg font-bold">Champions</div>
					<div className="text-sm font-semibold ">Status:</div>
					<div className="">{status}</div>
					<div className="text-sm font-semibold">Active Users:</div>
					<ul id="users" className="">
						{onlineUsers.map((onlineUser) => (
							<li key={onlineUser.id} className="flex items-center space-x-2">
								<div className="w-2 h-2 bg-green-500 rounded-full" />{' '}
								<p>
									{onlineUser.username} {onlineUser.status}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col w-full h-full md:w-4/5">
					<Button
						className="absolute font-bold top-2 right-2"
						handleClick={() => setShowModel(false)}
						label={<RxCross2 size={28} className="text-primaryGreen" />}
					/>
					<div className="px-3 py-1 text-lg font-bold bg-lightYellow">
						<div className="flex items-center">Chat</div>
					</div>

					<div className="flex-1 px-3 overflow-y-scroll bg-white rounded-bl-xl">
						{messages.map((message, index) => (
							<div key={index} id="messages" className="mb-3">
								<div className="flex justify-between">
									<span className="text-sm font-semibold text-yellow">
										{message.username}
									</span>
									<span className="text-xs">{message.time}</span>
								</div>
								<div className="text-sm text-gray-700">{message.text}</div>
							</div>
						))}
					</div>

					<div className="my-3">
						<form onSubmit={handleSubmit} className="flex">
							<input
								type="text"
								ref={messageInput}
								autoComplete="off"
								placeholder="Type your message here..."
								className="flex-1 px-3 py-1 mr-2 border rounded-md border-gray"
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
