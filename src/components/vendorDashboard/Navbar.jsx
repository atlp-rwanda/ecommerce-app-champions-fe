/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../../dummyData/passport_photo.jpg';
import Notification from './Notification';
import UserProfile from './userProfile';
import { useStateContext } from '../../contexts/ContextProvider';
import { handleToken } from '../../redux/actions/token.action';

const NavButton = ({ customFunc, icon, color, dotColor }) => (
	<button
		type="button"
		onClick={() => customFunc()}
		style={{ color }}
		className="cros relative text-xl rounded-full p-3 hover:bg-light-gray"
	>
		<span
			style={{ background: dotColor }}
			className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
		/>
		{icon}
	</button>
);

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		handleClick,
		isClicked,
		setScreenSize,
		screenSize,
	} = useStateContext();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleToken());
	}, []);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	const handleActiveMenu = () => setActiveMenu(!activeMenu);
	const { name } = useSelector((state) => state.token);

	return (
		<div className="flex justify-between p-2 md:ml-6 md:mr-6 relative z-40">
			<NavButton
				title="Menu"
				customFunc={handleActiveMenu}
				color="#225F33"
				icon={<AiOutlineMenu />}
			/>
			<div className="flex">
				<NavButton
					title="Notification"
					dotColor="rgb(254, 201, 15)"
					customFunc={() => handleClick('notification')}
					color="#225F33"
					icon={<RiNotification3Line />}
				/>
				<div
					className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
					onClick={() => handleClick('userProfile')}
				>
					<img
						className="rounded-full w-8 h-8"
						src={avatar}
						alt="user-profile"
					/>
					<p>
						<span className="text-gray-400 text-14">Hi,</span>
						<span className="text-gray-400 font-bold ml-1 text-14">{name}</span>
					</p>
					<MdKeyboardArrowDown className="text-gray-400 text-14" />
				</div>

				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
