/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Auth/Input';
import Button from '../Button/Button';
import {
	updateBuyerProfileFields,
	updateVendorProfileFields,
	genderOptions,
} from '../../constants/formFields';
import { getStoredValues } from '../../constants/storedValues';
import Select from '../Auth/Select';
import {
	updateBuyerProfile,
	updateVendorProfile,
} from '../../redux/actions/auth.profile.action';

const ProfileDetails = ({ userInfo }) => {
	console.log(userInfo[4]);
	const data = getStoredValues();
	let decodedToken = null;
	if (data) {
		decodedToken = data.decodedToken;
	}
	const profileInfo =
		decodedToken.role.roleName === 'buyer'
			? updateBuyerProfileFields
			: updateVendorProfileFields;
	const fieldState = {};
	profileInfo.forEach((field) => (fieldState[field.id] = ''));
	const [profileData, setProfileData] = useState(fieldState);
	const [gender, setGender] = useState('male');
	const dispatch = useDispatch();
	const handleChange = (e) =>
		setProfileData({ ...profileData, [e.target.id]: e.target.value });
	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (decodedToken.role.roleName === 'buyer') {
			dispatch(updateBuyerProfile({ ...profileData, gender }));
		}
		if (decodedToken.role.roleName === 'vendor') {
			dispatch(updateVendorProfile({ profileData }));
		}
	};
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
							value={userInfo[`${field.name}`]}
							isRequired={field.isRequired}
							labelText={field.labelText}
							labelFor={field.labelFor}
							autoComplete={field.autoComplete}
							handleChange={handleChange}
							className="w-full rounded-md appearance-none border-1 border-primaryGreen"
						/>
					))}
					{decodedToken.role.roleName === 'buyer' && (
						<Select
							labelFor="gender"
							labelText="Gender"
							name="gender"
							id="gender"
							className="w-full rounded-md appearance-none border-1 border-primaryGreen"
							value={userInfo[4]}
							options={genderOptions}
							onChange={handleGenderChange}
						/>
					)}
				</div>

				<Button
					label="Save"
					className="bg-primaryGreen text-white rounded-2xl p-1 w-28"
				/>
			</form>
		</div>
	);
};

export default ProfileDetails;
