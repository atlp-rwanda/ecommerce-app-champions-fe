import React from 'react';
import { Link } from 'react-router-dom';
import LoginIllustation from '../assets/login-illustration.svg';
import Input from '../components/Auth/Input';
import Button from '../components/Button/Button';

const Signup = () => {
	return (
		<div className="w-screen h-screen flex flex-row space-x-5 items-center">
			<div className="hidden w-2/5 md:flex items-center justify-center">
				<img src={LoginIllustation} alt="" className="w-9/12" />
			</div>
			<div className="w-3/5 flex flex-col h-full bg-brightGray p-9">
				<h3 className="text-left font-extrabold text-2xl font-bold text-yellow py-4">
					CREATE ACCOUNT
				</h3>
				<form action="">
					<Input placeholder="First Name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Button
						label="Submit"
						className="bg-primaryGreen text-white font-bold"
					/>
				</form>
				<div className="flex flex-row space-x-3 mt-6 py-2">
					<p>Already have an account?</p>
					<Link to="/login" className="text-lightBlue underline">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
