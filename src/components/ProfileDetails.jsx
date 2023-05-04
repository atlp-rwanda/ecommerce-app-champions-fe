/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Input from './Auth/Input';
import Button from './Button/Button';
import {
	updateBuyerProfileFields,
	updateVendorProfileFields,
} from '../constants/formFields';

const ProfileDetails = () => {
	const isBuyer = true;
	const profileInfo = isBuyer
		? updateBuyerProfileFields
		: updateVendorProfileFields;
	const fieldState = {};
	profileInfo.forEach((field) => (fieldState[field.id] = ''));
	const [signupState, setSignupState] = useState(fieldState);
	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });
	return (
		<div className="w-full px-10">
			<h4 className="text-yellow font-bold text-xl">More information</h4>
			<form className="my-4">
				<div className="grid grid-cols-3 mb-3 gap-6">
					{profileInfo.map((field) => (
						<Input
							key={field.id}
							placeholder={field.placeholder}
							type={field.type}
							id={field.id}
							name={field.name}
							// value={signupState[field.id]}
							isRequired={field.isRequired}
							labelText={field.labelText}
							labelFor={field.labelFor}
							autoComplete={field.autoComplete}
							handleChange={handleChange}
							className="w-full px-2 py-2 rounded-md appearance-none border-1 border-primaryGreen"
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
