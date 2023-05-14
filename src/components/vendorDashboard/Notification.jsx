/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteNotification } from '../../redux/actions/notifications';
import { setNotificationId } from '../../redux/reducers/auth/notificationSlice';

import Button from './Button';
import NotButton from './notButton';

const Notification = () => {
	const [chatData, setChatData] = useState(null);
	const { notifications } = useSelector((state) => state.notifications);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		if (notifications) {
			const chatData = notifications.map((item) => {
				return {
					id: item.id,
					message: item.subject,
					desc: item.message,
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

	return (
		<div className="side nav-item absolute right-5 md:right-40 top-16 bg-white p-8 rounded-lg w-96">
			<div className="flex justify-between items-center">
				<div className="flex gap-3">
					<p className="notif font-semibold text-lg">Notifications</p>
				</div>
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
						className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						<div>
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
		</div>
	);
};

export default Notification;
