/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Input from '../Auth/Input';
import Button from '../Button/Button';
import {
	updateBuyerProfileFields,
	updateVendorProfileFields,
	genderOptions,
} from '../../constants/formFields';
import Select from '../Auth/Select';
import {
	updateBuyerProfile,
	updateVendorProfile,
} from '../../redux/actions/auth.profile.action';

const ProfileDetails = ({ userInfo }) => {
	const { token, decodedToken } = useSelector((state) => state.token || {});
	const profileInfo =
		decodedToken?.role.roleName === 'buyer'
			? updateBuyerProfileFields
			: updateVendorProfileFields;
	const fieldState = {};
	const { loading } = useSelector((state) => state.profile || {});
	profileInfo.forEach((field) => (fieldState[field.id] = ''));
	const [profileData, setProfileData] = useState(fieldState);
	const [gender, setGender] = useState('male');
	const today = new Date();
	const numberOfDaysToAdd = 1000;
	const date = today.setDate(today.getDate() - numberOfDaysToAdd);
	const defaultValue = new Date(date).toISOString().split('T')[0];
	const [birthDate, setBirthDate] = useState(defaultValue);
	const handleDateChange = (e) => {
		setBirthDate(e.target.value);
	};

	const dispatch = useDispatch();
	const handleDataChange = (e) => {
		const { id, UserId, updatedAt, createdAt, ...others } = profileData;
		setProfileData({ ...others, [e.target.id]: e.target.value });
	};
	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (decodedToken.role.roleName === 'buyer') {
			dispatch(
				updateBuyerProfile(
					{ ...profileData, gender, birthDate },
					token,
					decodedToken.id
				)
			);
		} else if (decodedToken.role.roleName === 'vendor') {
			dispatch(
				updateVendorProfile(
					{ ...profileData, gender, birthDate },
					token,
					decodedToken.id
				)
			);
		}
	};
	useEffect(() => {
		if (userInfo) {
			setProfileData(userInfo);
		}
	}, [userInfo]);
	return (
		<div className="w-full px-6 md:px-10">
			<h4 className="text-yellow font-bold text-xl">More information</h4>
			<form className="my-4" onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3 gap-x-0 md:gap-x-6 gap-y-2 md:gap-y-4  w-full">
					{profileInfo.map((field) => (
						<Input
							key={field.id}
							placeholder={field.placeholder}
							type={field.type}
							id={field.id}
							value={profileData[`${field.name}`] || profileData[field.id]}
							isRequired={field.isRequired}
							labelText={field.labelText}
							labelFor={field.labelFor}
							autoComplete={field.autoComplete}
							handleChange={handleDataChange}
							className="w-full rounded-md appearance-none border-1 border-primaryGreen"
						/>
					))}
					<Input
						labelFor="date"
						labelText="Birth Date"
						id="birthDate"
						name="birthDate"
						value={birthDate}
						handleChange={handleDateChange}
						type="date"
						className="w-full rounded-md appearance-none border-1 border-primaryGreen"
					/>
					<Select
						labelFor="gender"
						labelText="Gender"
						name="gender"
						id="gender"
						className="w-full rounded-md appearance-none border-1 border-primaryGreen"
						value={userInfo && userInfo[4]}
						options={genderOptions}
						onChange={handleGenderChange}
					/>
				</div>

				<Button
					label="Save"
					className="bg-primaryGreen text-white rounded-2xl p-1 w-28"
					loading={loading}
				/>
			</form>
			<ToastContainer />
		</div>
	);
};

export default ProfileDetails;
