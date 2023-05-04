/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import 'flowbite';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { getBuyerProfile } from '../../redux/actions/auth.profile.action';
import Button from '../Button/Button';
import profile from '../../assets/profile.png';
import Input from '../Auth/Input';
import Select from '../Auth/Select';
import {
	genderOptions,
	updateBuyerProfileFields,
} from '../../constants/formFields';

function MyModal() {
	const [gender, setGender] = useState('');
	const dispatch = useDispatch();
	const userprofile = useSelector((state) => state.userProfile);
	// const fetchedProfile = useSelector((state) => state.profile);
	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		dispatch(getBuyerProfile());
	}, [dispatch]);

	return (
		<div className="bg-white w-screen h-screen">
			<div className="flex flex-col w-full h-full">
				<Link to="/" className="flex space-x-2 p-5">
					<IoIosArrowBack size={30} />
					<div className="text-2xl font-medium">Profile</div>
				</Link>
				<div className="bg-gray opacity-70 rounded-lg w-4/6 h-3/5 mx-auto my-5 px-5 flex space-x-1 items-center">
					<div className="w-1/2">
						<img src={profile} alt="Profile" className="w-1/6" />
						<div className="mt-5 ">
							<h1 className="text-3xl font-big">Personal information</h1>
						</div>

						<div className="flex flex-col pt-3 text-lg leading-10 font-small">
							{userprofile.loading && <h1>retrieving your profile...</h1>}
							{!userprofile.loading && userprofile.error ? (
								<div>Error: {userprofile.error}</div>
							) : (
								<>
									<label htmlFor="firstName">First Name : Sostene</label>
									<label htmlFor="lastName">Last Name :Ngarukiyimana</label>
									<label htmlFor="email">Email : ngso@gmail.com</label>
								</>
							)}
						</div>
						<div className="flex items-center mt-5 w-60">
							<Button
								type="button"
								data-modal-target="defaultModal"
								data-modal-toggle="defaultModal"
								className="flex items-center justify-center p-1 rounded-2xl border-2 border-primaryGreen hover:text-white hover:bg-primaryGreen hover:border-0 text-grayishBlue  font-bold my-2 text-sm w-32"
								label="Edit Profile"
							/>
						</div>
					</div>
					<div className="flex flex-col w-1/2 space-y-4">
						<label htmlFor="firstName">Shipping Address : Sostene</label>
						<label htmlFor="lastName">Address :Ngarukiyimana</label>
						<label htmlFor="email">Currency : ngso@gmail.com</label>
						<label htmlFor="email">Payment Method : ngso@gmail.com</label>
					</div>
				</div>
			</div>
			<div
				id="defaultModal"
				tabIndex="-1"
				aria-hidden="true"
				className="fixed top-0 left-0 right-0 z-10 hidden w-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div className="relative w-3/6 mx-auto h-full bg-white opacity-100 text-opacity-100 bg-opacity-100 rounded-xl p-5 flex flex-col space-y-3 shadow">
					<div className="flex justify-between items-center ">
						<h1 className="text-primaryGreen font-bold text-2xl">
							Update Profile
						</h1>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-hide="defaultModal"
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<form onSubmit={handleSubmit}>
						{updateBuyerProfileFields.map((field) => (
							<Input
								key={field.id}
								labelFor={field.labelFor}
								labelText={field.labelText}
								placeholder={field.placeholder}
								id={field.id}
								name={field.name}
								type={field.type}
								isRequired={field.isRequired}
								autoComplete={field.autoComplete}
								className="w-11/12 px-2 py-1 my-1 rounded-md appearance-none border-2 border-primaryGreen"
							/>
						))}
						<Select
							labelFor="gender"
							labelText="Gender"
							name="gender"
							id="gender"
							className="px-2 py-2 my-1 rounded-md flex flex-col text-xs w-11/12 border-2 border-primaryGreen "
							value={gender}
							options={genderOptions}
							onChange={handleGenderChange}
						/>
						<Button
							type="submit"
							className="flex items-center justify-center p-2 rounded-2xl bg-primaryGreen text-white  font-bold text-sm w-32 mx-auto my-3"
							label="Save"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default MyModal;
