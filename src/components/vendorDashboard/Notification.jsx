/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { BiCheckDouble } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import io from 'socket.io-client';
import varKeys from '../../constants/keys';

import {
	deleteNotification,
	markAllNotifications,
} from '../../redux/actions/notifications';
import {
	setNotificationId,
	markAllAsRead,
} from '../../redux/reducers/auth/notificationSlice';
import Button from './Button';
import NotButton from './notButton';
import LoadingSpinner from '../LoadingSpinner';

const url = varKeys.APP_URL;

const Notification = () => {
	const [chatData, setChatData] = useState(null);
	const { notifications } = useSelector((state) => state.notifications);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [markAllClicked, setMarkAllClicked] = useState(false); // New state variable
	const { isLoading } = useSelector((state) => state.notifications);
	const dispatch = useDispatch();

	useEffect(() => {
		if (notifications && Array.isArray(notifications)) {
			const chatData = notifications.map((item) => {
				return {
					id: item.id,
					message: item.subject,
					desc: item.message,
					isRead: item.isRead,
				};
			});
			setChatData(chatData);
		}
	}, [notifications]);

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};

	const handleDeleteNotification = (id) => {
		dispatch(setNotificationId({ id }));
		dispatch(deleteNotification(id));
	};

	const handleMarkAll = async () => {
		try {
			const response = await dispatch(markAllNotifications()).unwrap();
			dispatch(markAllAsRead());
		} catch (error) {
			console.log(error);
		}
	};

	const handleBidoublemarkClick = () => {
		setMarkAllClicked(true);
	};

	return (
		<div className="side nav-item absolute right-5 md:right-40 top-16 bg-white p-8 rounded-lg w-96">
			<div className="flex justify-between items-center">
				<div className="flex gap-3">
					<p className="notif font-semibold text-lg">Notifications</p>
				</div>
				{isLoading ? (
					<span className="px-2 flex justify-center border-transparent items-center">
						<LoadingSpinner className="" />
					</span>
				) : (
					<div
						className={`flex items-center border-t-neutral-800 p-1 cursor-pointer ${
							markAllClicked ? 'bg-green' : ''
						}`}
						onClick={() => {
							handleMarkAll();
							handleBidoublemarkClick();
						}}
					>
						<span
							className={`rounded-full border ${
								markAllClicked ? 'bg-green' : 'text-blue'
							}`}
						>
							<BiCheckDouble className="rounded-full w-6 h-6 " />
						</span>
					</div>
				)}
				<Button
					icon={<MdOutlineCancel />}
					color="rgb(153, 171, 180)"
					bgHoverColor="light-gray"
					size="2xl"
					borderRadius="50%"
				/>
			</div>
			<div className="mt-5 overflow-y-scroll overflow-x-hidden h-60 cursor-pointer">
				{chatData?.map((item, index) => (
					<div
						key={index}
						className="flex items-center leading-8 gap-5 border-b-1  border-color p-3"
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						<div>
							{item.isRead ? (
								<span className=" text-blue border rounded-full mr-2 w-6 h-6 cursor-pointer">
									<BiCheckDouble className="rounded-full w-6 h-6" />
								</span>
							) : (
								<span className=" text-[#858383] rounded-full border mr-2 w-6 h-6 cursor-pointer">
									<BiCheckDouble className="rounded-full w-6 h-6 " />
								</span>
							)}
						</div>

						<div className="">
							<p className="notif font-semibold dark:text-gray-200">
								{item.message}
							</p>
							<p className="text-gray-500 text-sm dark:text-gray-400">
								{item.desc}
							</p>
						</div>
						{hoveredIndex === index && (
							<NotButton
								icon={<RiDeleteBin6Line />}
								color="red"
								bgHoverColor="light-gray"
								size="2xl"
								borderRadius="50%"
								onClick={() => handleDeleteNotification(item.id)}
							/>
						)}
					</div>
				))}
			</div>
			<ToastContainer />
		</div>
	);
};

export default Notification;
