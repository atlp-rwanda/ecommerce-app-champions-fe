import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import React from 'react';
import Input from '../components/Auth/Input';
import Button from '../components/Button/Button';
import LoginIllustation from '../assets/login-illustration.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { processReset } from '../redux/reducers/Auth/ResetPasswordSlice';
import { useState, useEffect } from 'react';
const override = css`
	display: block;
	margin: 0 auto;
	text-align: center;
`;

const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const token = document.cookie.split('=')[1];
	const dispatch = useDispatch();
	const { loading, error, success } = useSelector(
		(state) => state.resetPassword
	);
	const navigate = useNavigate();
	const handleProcessReset = (event) => {
		event.preventDefault();
		dispatch(processReset({ token, password, confirmPassword }));
		setPassword('');
		setConfirmPassword('');
	};

	useEffect(() => {
		let timer;
		if (success) {
			timer = setTimeout(() => navigate('/login'), 5000); // Redirect to login page after 5 seconds
		} else if (error) {
			timer = setTimeout(() => window.location.reload(), 5000); // Reload the page after 5 seconds if there is an error
		}

		return () => clearTimeout(timer);
	}, [success, error, navigate]);

	return (
		<div className="w-screen h-screen flex flex-row space-x-5 items-center">
			<div className="hidden w-646 md:flex items-center justify-center">
				<img
					src={LoginIllustation}
					alt=""
					className="w-592 left-35 h-592 top-216"
				/>
			</div>
			<div className="w-5/6 flex flex-col h-full bg-brightGray   h-1024 p-9 left-346 py-40 ">
				<h3 className="text-left font-extrabold text-2xl font-bold text-yellow py-4">
					Reset Password
				</h3>
				<form onSubmit={handleProcessReset}>
					<Input
						placeholder="password"
						value={password}
						autocomplete="true"
						type="password"
						name="password"
						onChange={(event) => setPassword(event.target.value)}
					/>
					<Input
						placeholder="confirm password"
						value={confirmPassword}
						type="password"
						name="confirmPassword"
						autoComplete="true"
						onChange={(event) => setConfirmPassword(event.target.value)}
					/>
					<div className="items-center">
						{loading && (
							<PacmanLoader color={'#36D7B7'} css={override} size={12} />
						)}
					</div>
					<Button
						label="Reset Password"
						className="bg-primaryGreen text-white font-bold"
						disabled={loading}
					/>
					{error && <div className=" text-red">{error}</div>}
					{success && <div className="text-green-800">{success}</div>}
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
