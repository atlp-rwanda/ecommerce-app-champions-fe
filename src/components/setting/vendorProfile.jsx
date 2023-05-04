import { React, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { IoIosArrowBack } from 'react-icons/io';
import {
	fetchVendorProfile,
	updateVendorProfile,
} from '../../redux/reducers/users/vendorProfileSlice';
import {
	updateVendorProfileFields,
	genderOptions,
} from '../../constants/formFields';
import Select from '../Auth/Select';
import Button from '../Button/Button';
import Input from '../Auth/Input';

import profile from '../../assets/profile.png';

function VendorProfile({ token, userId }) {
	const defaultDate = new Date('03/25/2015');
	const [gender, setGender] = useState('');
	const [birthDate, setBirthDate] = useState(defaultDate);
	const [updateProfile, setUpdateProfile] = useState({});
	const [showForm, setShowForm] = useState(false);
	const formRef = useRef(null);
	const dispatch = useDispatch();
	const vendorprofile = useSelector((state) => state.vendorProfile);

	const handleUpdate = (e) => {
		setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
	};

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handleBirthDateChange = (event) => {
		setBirthDate(new Date(event.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateVendorProfile(
				{
					...updateProfile,
					gender,
					birthDate,
				},
				userId,
				token
			)
		);

		setShowForm(false);
	};
	useEffect(() => {
		dispatch(fetchVendorProfile(userId));
	}, [userId, dispatch]);

	useEffect(() => {
		function handleClickOutside(event) {
			if (formRef.current && !formRef.current.contains(event.target)) {
				setShowForm(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [formRef]);

	return (
		<div>
			{' '}
			{showForm && (
				<div
					ref={formRef}
					className="absolute z-10 pt-10 pb-4 pl-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pr-14 bg-gray85 md:w-1/3 "
				>
					<div className="my-2 text-2xl font-bold font-extrabold text-left text-yellow">
						Update profile
					</div>
					<form onSubmit={handleSubmit} className="min-w-full">
						<Input
							type="date"
							className="w-11/12 px-2 py-2 my-2 rounded-md appearance-none"
							name="birthDate"
							value={birthDate}
							handleChange={handleBirthDateChange}
							id="birthDate"
						/>
						<Select
							labelFor="gender"
							labelText="Gender"
							name="gender"
							id="gender"
							className="w-11/12 px-2 py-2 my-2 rounded-md"
							value={gender}
							options={genderOptions}
							onChange={handleGenderChange}
						/>

						{updateVendorProfileFields.map((field) => (
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
								handleChange={handleUpdate}
								className="w-11/12 px-2 py-2 my-2 rounded-md appearance-none"
							/>
						))}

						<Button
							label="Update"
							className="px-8 py-1 rounded-2xl mt-4 font-bold text-white bg-primaryGreen"
						/>
					</form>
				</div>
			)}
			<div className="flex w-full h-screen bg-romance ">
				<div className="flex w-1/4 px-6 pt-6">
					<Link to="/" className="grid w-1/6 grid-cols-2 gap-0">
						<IoIosArrowBack size={30} />
					</Link>
					<div className="text-2xl font-medium">Profile</div>
				</div>
				<div className="w-3/4 pt-5 pl-72">
					<div>
						<img src={profile} alt="Profile" />
					</div>
					<div className="mt-5 ">
						<h1 className="text-3xl font-big">Personal information</h1>
					</div>

					<div className="flex flex-col pt-3 text-lg leading-10 font-small">
						{vendorprofile.loading && <h1>Loading...</h1>}
						{!vendorprofile.loading && vendorprofile.error ? (
							<div>Error: {vendorprofile.error}</div>
						) : null}
						{vendorprofile.vendorProfile.data ? (
							<>
								<label htmlFor="firstName">
									First Name :
									{/* {JSON.stringify(userprofile.userProfile.data.others)} */}
									{vendorprofile.vendorProfile.data.others.firstName}
								</label>
								<label htmlFor="lastName">
									Last Name :{vendorprofile.vendorProfile.data.others.lastName}
								</label>
								<label htmlFor="email">
									Email :{vendorprofile.vendorProfile.data.others.email}
								</label>
							</>
						) : null}
					</div>
					<div className="flex items-center mt-5 w-60">
						<Button
							className="w-48 h-12 bg-white border-2 border-black rounded-full"
							label="Update Profile"
							handleClick={() => setShowForm(true)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VendorProfile;
