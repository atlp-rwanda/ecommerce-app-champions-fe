/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Auth/PasswordInput';
import Button from '../components/Button/PasswordButton';
import LoginIllustation from '../assets/login-illustration.svg';
import { processReset } from '../redux/reducers/Auth/ResetPasswordSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const token = document.cookie.split('=')[1];
	const dispatch = useDispatch();
	const { loading, error, success } = useSelector((state) => ({
		loading: state.resetPassword?.loading,
		error: state.resetPassword?.error,
		succes: state.resetPassword?.succes,
	}));

	const handleProcessReset = (event) => {
		event.preventDefault();
		dispatch(processReset({ token, password, confirmPassword }));
	};
	const navigate = useNavigate();
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		let timer;
		if (success) {
			timer = setTimeout(() => navigate('/login'), 5000);
		} else if (error) {
			timer = setTimeout(() => window.location.reload(), 5000);
		}

		return () => clearTimeout(timer);
	}, [success, error, navigate]);
	return (
		<div className="w-screen h-screen flex flex-row space-x-30 items-center">
			<div className="hidden w-3/5 md:3/5 md:flex items-center justify-center">
				<img src={LoginIllustation} alt="" className="w-9/12" />
			</div>
			<div className="w-5/6 flex flex-col h-full bg-brightGray   h-1024 p-9 left-346 py-40 ">
				<h3 className="text-left font-extrabold text-2xl font-bold text-yellow py-4">
					Reset Password
				</h3>
				<form onSubmit={handleProcessReset}>
					<Input
						placeholder="password"
						value={password}
						type="password"
						name="password"
						labelFor="password"
						labelText="Password"
						onChange={(event) => setPassword(event.target.value)}
						autoComplete="new-password"
					/>
					<Input
						placeholder="confirm password"
						value={confirmPassword}
						type="password"
						name="confirmPassword"
						labelFor="confirmPassword"
						labelText="Confirm Password"
						onChange={(event) => setConfirmPassword(event.target.value)}
						autoComplete="new-password"
					/>
					<ToastContainer />
					<Button
						label={loading ? <LoadingSpinner /> : 'Submit '}
						className="bg-primaryGreen text-white font-bold w-28 p-1 my-2 flex justify-center items-center"
						disabled={loading}
					/>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
