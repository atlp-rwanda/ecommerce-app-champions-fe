/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { buyerSignUpFields } from '../../constants/formFields';
import Input from '../Auth/Input';
import Button from '../Button/Button';

const fieldState = {};
buyerSignUpFields.forEach((field) => (fieldState[field.id] = ''));

const UserProfileDetails = ({ profile }) => {
	const [signupState, setSignupState] = useState(fieldState);
	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });
	if (profile) {
		return (
			<div className="w-full md:w-11/12">
				<h4 className="text-yellow font-bold text-xl">Personal Details</h4>
				<form className="grid grid-cols-1 md:grid-cols-2 gap-y-3 my-1 items-center gap-x-14 md:bg-none">
					{buyerSignUpFields.map((field) => (
						<Input
							key={field.id}
							placeholder={field.placeholder}
							type={field.type}
							id={field.id}
							name={field.name}
							value={
								field.name === 'password'
									? signupState[field.d]
									: profile[`${field.name}`]
							}
							isRequired={field.isRequired}
							labelText={field.labelText}
							labelFor={field.labelFor}
							autoComplete={field.autoComplete}
							handleChange={handleChange}
							disabled={field.type !== 'password' && true}
							className="w-full rounded-md appearance-none border-1 border-primaryGreen"
						/>
					))}
					<Button
						label="change Password"
						className="bg-primaryGreen text-white rounded-2xl p-1 w-40"
					/>
				</form>
			</div>
		);
	}
};

export default UserProfileDetails;
