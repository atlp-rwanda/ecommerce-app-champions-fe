/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../../dummyData/dummy';
import Button from './Button';

const Notification = () => {
	const [showAllNotifications, setShowAllNotifications] = useState(false);

	const handleSeeAllNotificationsClick = () => {
		setShowAllNotifications(!showAllNotifications);
	};
	return (
		<div className="dashboard side nav-item absolute right-5 md:right-40 top-16 bg-white p-8 rounded-lg w-96">
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
			<div className="mt-5 overflow-y-scroll overflow-x-hidden h-60">
				{chatData?.map((item, index) => (
					<div
						key={index}
						className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
					>
						<img
							className="rounded-full h-10 w-10"
							src={item.image}
							alt={item.message}
						/>
						<div>
							<p className="notif font-semibold dark:text-gray-200">
								{item.message}
							</p>
							<p className="text-gray-500 text-sm dark:text-gray-400">
								{item.desc}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-5">
				<Button
					color="white"
					bgColor="#225F33"
					text={
						showAllNotifications
							? 'See less notifications'
							: 'See all notifications'
					}
					borderRadius="10px"
					width="full"
					onClick={handleSeeAllNotificationsClick}
				/>
			</div>
		</div>
	);
};

export default Notification;
