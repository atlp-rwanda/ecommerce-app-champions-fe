/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LoginIllustation from '../assets/login-illustration.svg';
import { buyerSignUpFields } from '../constants/formFields';
import Input from '../components/Auth/Input';
import Button from '../components/Button/Button';
import { registerBuyer } from '../redux/actions/auth.action';
import 'react-toastify/dist/ReactToastify.css';

const fieldState = {};
buyerSignUpFields.forEach((field) => (fieldState[field.id] = ''));

const BuyerSignupPage = () => {
	const [signupState, setSignupState] = useState(fieldState);
	const userDetails = useSelector((state) => state.register || {});
	const { loading, user } = userDetails;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerBuyer(signupState));
	};

	useEffect(() => {
		setTimeout(() => {
			if (user) return navigate('/login');
		}, 9000);
	}, [user]);

	return (
		<div className="w-screen h-screen flex flex-row space-x-0 md:space-x-0 items-center">
			<div className="hidden w-2/5 md:3/5 md:flex items-center justify-center">
				<img src={LoginIllustation} alt="" className="w-9/12" />
			</div>
			<div className="w-full md:w-3/5 flex flex-col h-full bg-brightGray p-9">
				<div className="w-full md:w-4/5 h-4/5 px-3 flex flex-col justify-center">
					<h3 className="text-left font-extrabold text-2xl font-bold text-yellow my-2">
						Create Account
					</h3>
					<form onSubmit={handleSubmit} id="signupForm">
						{buyerSignUpFields.map((field) => (
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
								className="appearance-none py-2 px-2 my-2 rounded-md w-11/12"
							/>
						))}
						<Button
							loading={loading}
							label="Register"
							className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
						/>
					</form>
					<ToastContainer />
					<div className="flex flex-row space-x-3 py-2 my-2">
						<p>Already have an account?</p>
						<Link to="/login" className="text-lightBlue underline">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyerSignupPage;
