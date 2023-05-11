/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button/Button';
import { getChatUsers, getChatMessages } from '../redux/actions/chat.action';

let socket;
const user = localStorage.getItem('user');
// eslint-disable-next-line no-unsafe-optional-chaining
const others = JSON.parse(user)?.data.others;

const LiveChat = () => {
	const messageInput = useRef();
	const [status, setStatus] = useState('');
	const chats = useSelector((state) => state?.chats?.chat?.data?.chats);

	const [messages, setMessages] = useState([]);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const navigate = useNavigate();

	if (others === 'undefined') {
		navigate('/login');
	}

	const dispatch = useDispatch();
	const token = Cookies.get('token');
	const decodedToken = jwtDecode(token);
	const { id } = decodedToken;

	useEffect(() => {
		dispatch(getChatUsers(id));
	}, [dispatch, id]);

	useEffect(() => {
		socket = io('https://ecommerce-champions.onrender.com', {
			query: others,
		});
	}, []);

	useEffect(() => {
		dispatch(getChatMessages(token));
	}, []);

	useEffect(() => {
		socket.emit('joinChat', others?.firstName, () => {
			setStatus('Connected');
		});

		socket.on('message', (msg) => {
			if (msg.text === 'welcome to Our public chat') {
				// eslint-disable-next-line no-new, new-cap
				new toast(`${msg.text}`);
			}

			setMessages((prevMessages) => [...prevMessages, msg]);
		});

		socket.on('connectedUser', (users) => {
			setOnlineUsers(users);
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
		others && (
			<>
				<div />
				<div className="flex justify-center h-screen mt-0">
					<div className="flex w-1/2 h-2/3 bg-green">
						<div className="flex flex-col w-1/3 bg-blue">
							<div className="flex items-center justify-center h-20 text-2xl font-bold">
								<i className="mr-2 fas fa-comments" />
								Champions
							</div>
							<div className="px-4 mt-4 mb-2 text-sm font-semibold">
								Status:
							</div>
							<div className="px-4 mb-4">{status}</div>
							<div className="px-4 mt-4 mb-2 text-sm font-semibold">
								Active Users:
							</div>
							<ul id="users" className="px-4 mb-4">
								{onlineUsers.map((user) => (
									<li key={user.id} className="flex mb-2">
										<div className="w-4 h-4 mr-2 bg-green-500 rounded-full" />{' '}
										{user.username} {user.status}
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col flex-1 h-full bg-gray-200">
							<div className="flex items-center justify-center h-20 text-2xl font-bold bg-gray">
								Chat
							</div>
							<div className="flex-1 px-4 overflow-y-scroll bg-green-50">
								{messages.map((message, index) => (
									// eslint-disable-next-line react/no-array-index-key
									<div key={index} id="messages" className="mb-4">
										<div className="flex justify-between mb-1">
											<span className="font-semibold">{message.username}</span>
											<span className="text-xs">{message.time}</span>
										</div>
										<div className="text-gray-700">{message.text}</div>
									</div>
								))}
							</div>
							<div className="p-4 mt-4 bg-blue">
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
										label="send"
										className="w-full p-1 my-2 font-bold rounded md:w-auto bg-gray"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	);
};
export default LiveChat;
