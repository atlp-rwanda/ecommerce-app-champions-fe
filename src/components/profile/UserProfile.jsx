/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
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
import { getStoredValues } from '../../constants/storedValues';
import LoadingSpinner from '../LoadingSpinner';

const UserProfile = () => {
	const data = getStoredValues();
	let decodedToken = null;
	if (data) {
		decodedToken = data.decodedToken;
	}
	const dispatch = useDispatch();
	const { profile, loading } = useSelector((state) => state.profile);
	useEffect(() => {
		const role = decodedToken.role.roleName;
		dispatch(role === 'buyer' ? getBuyerProfile() : getVendorProfile());
	}, [dispatch]);
	return (
		<div className="w-screen flex flex-col">
			<div className="w-screen md:w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
				<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
				<AiOutlineLogout
					size={25}
					className="text-primaryGreen cursor-pointer"
				/>
			</div>
			{loading ? (
				<div className="w-full h-full flex items-center justify-center mx-auto my-4">
					<LoadingSpinner className="w-9 h-9 mr-2 text-gray-200 animate-spin fill-primaryGreen" />
				</div>
			) : (
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
						<UserProfileDetails profile={profile.data.others} />
					</div>
					<ProfileDetails userInfo={profile.data.profile} />
				</div>
			)}
		</div>
	);
};

export default UserProfile;
