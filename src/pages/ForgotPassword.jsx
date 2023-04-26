import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import Input from '../components/Auth/Input';
import Button from '../components/Button/Button';
import LoginIllustation from '../assets/login-illustration.svg';
import { useSelector, useDispatch } from 'react-redux';
import { requestReset } from '../redux/reducers/Auth/ForgotPasswordSlice';
import { useState, useEffect } from 'react';

const override = css`
	display: block;
	margin: 0 auto;
	text-align: center;
`;

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const { isLoading, requestResetError, successMessage } = useSelector(
		(state) => state.password
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(requestReset(email));
	};

	useEffect(() => {
		let timeoutId;
		if (requestResetError || successMessage) {
			timeoutId = setTimeout(() => {
				window.location.reload();
			}, 5000); // set the delay to 30 seconds
		}
		return () => {
			clearTimeout(timeoutId);
		};
	}, [requestResetError, successMessage]);

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
					Request Reset
				</h3>
				<form onSubmit={handleSubmit}>
					<Input
						placeholder="Email"
						value={email}
						name="email"
						type="email"
						onChange={(event) => setEmail(event.target.value)}
					/>
					<div className="items-center">
						{isLoading && (
							<PacmanLoader color={'#36D7B7'} css={override} size={12} />
						)}
					</div>

					<Button
						label="Request Reset"
						className="bg-primaryGreen text-white font-bold"
						disabled={isLoading}
					/>

					{requestResetError && (
						<div className="text-red">{requestResetError}</div>
					)}
					{successMessage && (
						<div className="text-green-800">{successMessage}</div>
					)}

					<div className="flex flex-row">
						<Link to="/login" className="text-lightBlue underline">
							back to login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
