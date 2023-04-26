import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Input from '../components/Auth/Input';
import LoginIllustation from '../assets/Secure login-bro 2.svg';
import Logo from '../assets/Logo.svg';
import SuccessCheckmark from '../components/checkMark/successCheckMark';
import authAction from '../redux/actions/authAction';
import TimeCount from '../helpers/timeCount';

const TwoFactorAuth = () => {
	const [OTP, setOTP] = useState('');
	const dispatch = useDispatch();
	const { loading, error, token } = useSelector((state) => state.auth);
	const [seconds, setSeconds] = useState(30);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		return dispatch(authAction(OTP));
	};
	const formatTime = TimeCount(seconds);
	useEffect(() => {
		if (seconds === 0) {
			return navigate('/login');
		}
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [seconds, dispatch, navigate]);

	return (
		<form onSubmit={handleSubmit}>
			<div className=" shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.05),inset_0px_2px_3px_0px_rgba(0,0,0,0.1)] text-center px-0 py-[8em]">
				<div className="hidden w-2/5 md:flex items-center justify-center">
					<img src={LoginIllustation} alt="" className="w-9/12 " />
				</div>
				<div className="absolute top-[40px] left-[50px] middle:hidden">
					<img src={Logo} alt="" className="" />
				</div>
				<div className="bg-gradient-to-b from-green-400 to-green-100 via-green-200 text-[#225F33] bg-[#92E3A9] middle:bg-[#92E3A9] absolute w-full sm:w-[500px] md:w-[700px] xl:w-[800px] -translate-x-2/4 -translate-y-2/4 p-[100px] rounded-[10px] left-2/4 top-2/4">
					<div className="text-[45px] relative bottom-10 md:text-[1.25em] mt-0 mb-[0.4em] mx-0 iphoneSE:text-[30px] samsung:text-[30px]">
						{token && <SuccessCheckmark />}
						<h1>
							<b>Account Verification</b>
						</h1>
					</div>
					<div className="text-[15px] relative bottom-5 middle:text-[15px] iphoneSE:text-[12px] samsung:text-[12px]">
						<div className="pb-[10px]">
							<p>
								Enter the one time password code sent to your email to verify
								your identity and gain access to your account
							</p>
						</div>
						<h2>Expires In: {formatTime}</h2>
					</div>
					<div className="text-[13pt] font-light font-sans leading-[1.85em] text-[#755139] md:leading-[1.75em] text-[10pt] tracking-[0] iphoneSE:px-1 ">
						<Input
							handleChange={(e) => setOTP(e.target.value)}
							placeholder="xxx-xxx"
							name="otp"
							className="font-sans p-[0.75em] font-light text-[1em] rounded-lg w-full"
						/>
					</div>
					<div className="relative top-4 md:text-center text-[1.2em] w-full px-0 py-[1em]">
						<Button
							label={loading ? 'Verifying...' : 'CONTINUE'}
							className="bg-primaryGreen text-[#92E3A9] font-bold shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.5),inset_0px_2px_1px_0px_rgba(255,255,255,0.75)] hover:bg-emerald-500"
						/>
					</div>
					<div className="relative top-[40px]">
						<p>
							<b>Didn't receive the Code?</b>{' '}
							<b className="text-red cursor-pointer hover:text-white">
								<Link to="/Login">try again</Link>
							</b>
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default TwoFactorAuth;
