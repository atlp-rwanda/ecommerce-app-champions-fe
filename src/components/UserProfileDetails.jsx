/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { buyerSignUpFields } from '../constants/formFields';
import Input from './Auth/Input';
import Button from './Button/Button';

const fieldState = {};
buyerSignUpFields.forEach((field) => (fieldState[field.id] = ''));

const UserProfileDetails = () => {
	const [signupState, setSignupState] = useState(fieldState);
	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });
	return (
		<div className="flex flex-col w-11/12">
			<h4 className="text-yellow font-bold text-xl">Personal Details</h4>
			<form className="flex flex-col space-y-3 my-4">
				<div className="flex items-center  w-full space-x-10">
					<Input
						key={buyerSignUpFields[0].id}
						placeholder={buyerSignUpFields[0].placeholder}
						type={buyerSignUpFields[0].type}
						id={buyerSignUpFields[0].id}
						name={buyerSignUpFields[0].name}
						// value={signupState[field.id]}
						isRequired={buyerSignUpFields[0].isRequired}
						labelText={buyerSignUpFields[0].labelText}
						labelFor={buyerSignUpFields[0].labelFor}
						autoComplete={buyerSignUpFields[0].autoComplete}
						handleChange={handleChange}
						disabled
						className="w-80 px-2 py-2 my-1 rounded-md appearance-none border-1 border-primaryGreen"
					/>
					<Input
						key={buyerSignUpFields[1].id}
						placeholder={buyerSignUpFields[1].placeholder}
						type={buyerSignUpFields[1].type}
						id={buyerSignUpFields[1].id}
						name={buyerSignUpFields[1].name}
						// value={signupState[field.id]}
						isRequired={buyerSignUpFields[1].isRequired}
						labelText={buyerSignUpFields[1].labelText}
						labelFor={buyerSignUpFields[1].labelFor}
						autoComplete={buyerSignUpFields[1].autoComplete}
						handleChange={handleChange}
						disabled
						className="w-80 px-2 py-2 my-1 rounded-md appearance-none border-1 border-primaryGreen"
					/>
				</div>
				<div className="flex items-center  w-full space-x-10">
					<Input
						key={buyerSignUpFields[2].id}
						placeholder={buyerSignUpFields[2].placeholder}
						type={buyerSignUpFields[2].type}
						id={buyerSignUpFields[2].id}
						name={buyerSignUpFields[2].name}
						// value={signupState[field.id]}
						isRequired={buyerSignUpFields[2].isRequired}
						labelText={buyerSignUpFields[2].labelText}
						labelFor={buyerSignUpFields[2].labelFor}
						autoComplete={buyerSignUpFields[2].autoComplete}
						handleChange={handleChange}
						disabled
						className="w-80 px-2 py-2 my-1 rounded-md appearance-none border-1 border-primaryGreen"
					/>
					<Input
						key={buyerSignUpFields[3].id}
						placeholder={buyerSignUpFields[3].placeholder}
						type={buyerSignUpFields[3].type}
						id={buyerSignUpFields[3].id}
						name={buyerSignUpFields[3].name}
						// value={signupState[field.id]}
						isRequired={buyerSignUpFields[3].isRequired}
						labelText={buyerSignUpFields[3].labelText}
						labelFor={buyerSignUpFields[3].labelFor}
						autoComplete={buyerSignUpFields[3].autoComplete}
						handleChange={handleChange}
						// disabled={true}
						className="w-80 px-2 py-2 my-1 rounded-md appearance-none border-1 border-primaryGreen"
					/>
				</div>
				<Button
					label="change Password"
					className="bg-primaryGreen text-white rounded-2xl p-1 w-40"
				/>
			</form>
		</div>
	);
};

export default UserProfileDetails;
