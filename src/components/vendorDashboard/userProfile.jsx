/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { handleToken, handleLogout } from '../../redux/actions/token.action';
import {
	getBuyerProfile,
	getVendorProfile,
} from '../../redux/actions/auth.profile.action';
import Button from './Button';
import NotButton from './notButton';
import { userProfileData } from '../../dummyData/dummy';
import avatar from '../../dummyData/passport_photo.jpg';

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loggedinuser, setLoggedinuser] = useState('');
	const { decodedToken, token } = useSelector((state) => state.token || {});
	const { profile } = useSelector((state) => state.userProfile || {});
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	useEffect(() => {
		if (decodedToken) {
			if (decodedToken?.role.roleName === 'buyer') {
				dispatch(getBuyerProfile(decodedToken.id));
			} else if (decodedToken?.role.roleName === 'vendor') {
				dispatch(getVendorProfile(decodedToken.id));
			}
		}
	}, [decodedToken, dispatch]);
	useEffect(() => {
		if (profile) {
			setLoggedinuser(profile.data?.others?.firstName);
		}
	}, [profile]);

	const logout = () => {
		dispatch(handleLogout());
		dispatch(handleToken()).then(() => navigate('/'));
	};
	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	});

	return (
		<div className="dashboard side nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-30">
			<div className="flex justify-between items-center">
				<p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
				<Button
					icon={<MdOutlineCancel />}
					color="rgb(153, 171, 180)"
					bgHoverColor="light-gray"
					size="2xl"
					borderRadius="50%"
				/>
			</div>
			<div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
				<img
					className="rounded-full h-24 w-24"
					src={avatar}
					alt="user-profile"
				/>
				<div>
					<p className="font-semibold text-xl dark:text-gray-200">
						{loggedinuser}
					</p>
					<p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
						Ecommerce Champions
					</p>
				</div>
			</div>
			<div>
				{userProfileData.map((item, index) => (
					<div
						key={index}
						className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
					>
						<button
							type="button"
							style={{ color: item.iconColor, backgroundColor: item.iconBg }}
							className=" text-xl rounded-lg p-3 hover:bg-light-gray"
						>
							{item.icon}
						</button>

						<div>
							<p className="font-semibold dark:text-gray-200 ">{item.title}</p>
							<p className="text-gray-500 text-sm dark:text-gray-400">
								{item.desc}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-5">
				<NotButton
					color="white"
					bgColor="#225F33"
					text="Logout"
					borderRadius="10px"
					width="full"
					onClick={logout}
				/>
			</div>
		</div>
	);
};

export default UserProfile;
