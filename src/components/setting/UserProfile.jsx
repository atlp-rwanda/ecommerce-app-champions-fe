import React from 'react';
import { AiOutlineLogout, AiFillEdit } from 'react-icons/ai';
import Logo from '../../assets/Logo.svg';
import profilePic from '../../assets/profilePic.jpg';
import UserProfileDetails from '../UserProfileDetails';
import ProfileDetails from '../ProfileDetails';

const UserProfile = () => {
	return (
		<div className="w-screen flex flex-col">
			<div className="w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
				<img src={Logo} className="w-40 cursor-pointer" alt="Logo" />
				<AiOutlineLogout
					size={25}
					className="text-primaryGreen cursor-pointer"
				/>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex space-x-10 my-4 px-10 w-full">
					<div className="w-1/5 flex items-center justify-center">
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
					<UserProfileDetails />
				</div>
				<ProfileDetails />
			</div>
		</div>
	);
};

export default UserProfile;
