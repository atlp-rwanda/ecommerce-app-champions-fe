/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Input from '../components/Auth/PasswordInput';
import Button from '../components/Button/PasswordButton';
import LoginIllustation from '../assets/login-illustration.svg';
import { requestReset } from '../redux/reducers/auth/ForgotSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const { isLoading, requestResetError, successMessage } = useSelector(
		(state) => ({
			isLoading: state.password?.isLoading,
			requestResetError: state.password?.requestResetError,
			successMessage: state.password?.successMessage,
		})
	);
	const handleRequestReset = (event) => {
		event.preventDefault();
		dispatch(requestReset(email));
	};
	useEffect(() => {
		let timeoutId;
		if (requestResetError || successMessage) {
			timeoutId = setTimeout(() => window.location.reload(), 5000);
		}
		return () => clearTimeout(timeoutId);
	}, [requestResetError, successMessage]);
	return (
		<div className="w-screen h-screen flex flex-row space-x-30 items-center">
			<div className="hidden w-3/5 md:3/5 md:flex items-center justify-center">
				<img src={LoginIllustation} alt="" className="w-9/12" />
			</div>
			<div className="w-5/6 flex flex-col h-full bg-brightGray   h-1024 p-9 left-346 py-40 ">
				<h3 className="text-left font-extrabold text-2xl font-bold text-yellow py-2">
					Request Reset
				</h3>
				<form onSubmit={handleRequestReset}>
					<Input
						id="Email"
						placeholder="Email"
						value={email}
						name="email"
						type="email"
						labelFor="Email"
						labelText="Email"
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Button
						label={
							isLoading ? (
								<LoadingSpinner className="w-6 h-6 mr-2 text-gray-200 animate-spin fill-white" />
							) : (
								'Submit'
							)
						}
						className="bg-primaryGreen text-white font-bold w-28 p-1 my-2 flex justify-center items-center"
						disabled={isLoading}
					/>
					<div className="flex flex-row">
						<Link to="/login" className="text-lightBlue  underline">
							back to login
						</Link>
					</div>
					<ToastContainer />
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
