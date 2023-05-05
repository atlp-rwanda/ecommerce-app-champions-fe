/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Input from '../Auth/Input';
import Button from '../Button/Button';
import {
	updateBuyerProfileFields,
	updateVendorProfileFields,
} from '../../constants/formFields';
import { getStoredValues } from '../../constants/storedValues';

const ProfileDetails = () => {
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
	const [signupState, setSignupState] = useState(fieldState);
	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });
	return (
		<div className="w-full px-6 md:px-10">
			<h4 className="text-yellow font-bold text-xl">More information</h4>
			<form className="my-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3 gap-x-0 md:gap-x-6 gap-y-2 md:gap-y-4  w-full">
					{profileInfo.map((field) => (
						<Input
							key={field.id}
							placeholder={field.placeholder}
							type={field.type}
							id={field.id}
							name={field.name}
							value={signupState[field.id]}
							isRequired={field.isRequired}
							labelText={field.labelText}
							labelFor={field.labelFor}
							autoComplete={field.autoComplete}
							handleChange={handleChange}
							className="w-full rounded-md appearance-none border-1 border-primaryGreen"
						/>
					))}
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
