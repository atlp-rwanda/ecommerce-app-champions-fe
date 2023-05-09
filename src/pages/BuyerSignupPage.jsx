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
		if (user) {
			setSignupState({
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			});
		}
		setTimeout(() => {
			if (user) {
				return navigate('/login');
			}
		}, 7000);
	}, [user]);

	return (
		<div className="flex flex-row items-center w-screen h-screen space-x-0 md:space-x-0">
			<div className="items-center justify-center hidden w-2/5 md:3/5 md:flex">
				<img src={LoginIllustation} alt="" className="w-9/12" />
			</div>
			<div className="flex flex-col w-full h-full md:w-3/5 bg-brightGray p-9">
				<div className="flex flex-col justify-center w-full px-3 md:w-4/5 h-4/5">
					<h3 className="my-2 text-2xl font-bold font-extrabold text-left text-yellow">
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
								className="w-11/12 px-2 py-2 my-2 rounded-md appearance-none"
							/>
						))}
						<Button
							user={user}
							loading={loading}
							label="Register"
							className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
						/>
					</form>
					<ToastContainer />
					<div className="flex flex-row space-x-3 py-2 my-2">
						<p>Already have an account?</p>
						<Link to="/login" className="underline text-lightBlue">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyerSignupPage;
