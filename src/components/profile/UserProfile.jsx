/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { AiOutlineLogout, AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import profilePic from '../../assets/profilePic.jpg';
import UserProfileDetails from './UserProfileDetails';
import ProfileDetails from './ProfileDetails';
import {
	getBuyerProfile,
	getVendorProfile,
} from '../../redux/actions/auth.profile.action';
import LoadingSpinner from '../LoadingSpinner';
import { handleToken, handleLogout } from '../../redux/actions/token.action';

const UserProfile = () => {
	const [profileInfo, setProfileInfo] = useState('');
	const [fullDetails, setFullDetails] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { decodedToken } = useSelector((state) => state.token || {});
	const { profile, loading } = useSelector((state) => state.userProfile || {});
	const updateProfile = useSelector((state) => state.profile);
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
	}, [decodedToken]);
	useEffect(() => {
		if (profile) {
			setProfileInfo(profile.data.others);
			setFullDetails(profile.data.profile);
		}
	}, [profile, updateProfile]);
	const logout = () => {
		dispatch(handleLogout());
		navigate('/');
	};
	if (!profile || loading === true) {
		return (
			<div>
				<div className="w-screen md:w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
					<Link to="/">
						<img
							src={Logo}
							className="w-52 md:w-40 cursor-pointer"
							alt="Logo"
						/>
					</Link>
					<AiOutlineLogout
						size={25}
						className="cursor-pointer text-primaryGreen"
						onClick={() => logout()}
					/>
				</div>
				<div className="flex items-center justify-center w-full h-full mx-auto my-4">
					<LoadingSpinner className="mr-2 text-gray-200 w-9 h-9 animate-spin fill-primaryGreen" />
				</div>
			</div>
		);
	}
	return (
		<div className="w-screen flex flex-col">
			<div className="w-screen md:w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
				<Link to="/">
					<img src={Logo} className="w-52 md:w-40 cursor-pointer" alt="Logo" />
				</Link>
				<AiOutlineLogout
					size={25}
					className="cursor-pointer text-primaryGreen"
					onClick={() => logout()}
				/>
			</div>
			<div className="flex flex-col w-full space-y-4 md:space-y-0">
				<div className="flex flex-col w-full px-6 my-4 space-x-0 md:flex-row md:space-x-10 md:px-10">
					<div className="flex items-center justify-center w-full mx-auto md:w-1/5 md:mx-0">
						<div className="relative">
							<img
								src={profilePic}
								alt=""
								className="object-cover w-32 h-32 border-4 rounded-full border-lightYellow"
							/>
							<div className="absolute right-0 z-10 flex items-center justify-center rounded-full cursor-pointer w-9 bg-primaryGreen h-9 bottom-4">
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
