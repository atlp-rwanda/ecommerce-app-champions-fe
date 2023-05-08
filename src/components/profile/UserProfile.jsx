/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AiOutlineLogout, AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/Logo.svg';
import profilePic from '../../assets/profilePic.jpg';
import UserProfileDetails from './UserProfileDetails';
import ProfileDetails from './ProfileDetails';
import {
	getBuyerProfile,
	getVendorProfile,
} from '../../redux/actions/auth.profile.action';
import LoadingSpinner from '../LoadingSpinner';
import { handleToken } from '../../redux/actions/token.action';

const UserProfile = () => {
	const [profileInfo, setProfileInfo] = useState({});
	const [fullDetails, setFullDetails] = useState({});
	const dispatch = useDispatch();
	const { decodedToken } = useSelector((state) => state.token);
	const { profile, loading } = useSelector((state) => state.userProfile);
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	useEffect(() => {
		if (decodedToken) {
			if (decodedToken.role.roleName === 'buyer') {
				dispatch(getBuyerProfile(decodedToken.id));
			} else if (decodedToken.role.roleName === 'vendor') {
				dispatch(getVendorProfile(decodedToken.id));
			}
		}
	}, [decodedToken]);
	useEffect(() => {
		if (profile) {
			setProfileInfo(profile.data.others);
			setFullDetails(profile.data.profile);
		}
	}, [profile]);
	if (!profile || loading === true) {
		return (
			<div>
				<div className="w-screen md:w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
					<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
					<AiOutlineLogout
						size={25}
						className="text-primaryGreen cursor-pointer"
						onClick={() => Cookies.remove('token')}
					/>
				</div>
				<div className="w-full h-full flex items-center justify-center mx-auto my-4">
					<LoadingSpinner className="w-9 h-9 mr-2 text-gray-200 animate-spin fill-primaryGreen" />
				</div>
			</div>
		);
	}
	return (
		<div className="w-screen flex flex-col">
			<div className="w-screen md:w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
				<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
				<AiOutlineLogout
					size={25}
					className="text-primaryGreen cursor-pointer"
				/>
			</div>
			<div className="flex flex-col space-y-4 md:space-y-0 w-full">
				<div className="flex flex-col md:flex-row space-x-0  md:space-x-10 my-4 px-6 md:px-10 w-full">
					<div className="w-full md:w-1/5 flex mx-auto md:mx-0  items-center justify-center">
						<div className="relative">
							<img
								src={profilePic}
								alt=""
								className="w-32 h-32 rounded-full object-cover border-4 border-lightYellow"
							/>
							<div className="w-9 bg-primaryGreen h-9 rounded-full absolute right-0 bottom-4 flex items-center justify-center cursor-pointer z-10">
								<AiFillEdit className="text-white" size={18} />
							</div>
						</div>
					</div>
					<UserProfileDetails profile={profileInfo} />
				</div>
				<ProfileDetails userInfo={fullDetails} />
			</div>
		</div>
	);
};

export default UserProfile;
