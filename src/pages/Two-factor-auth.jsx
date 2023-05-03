/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from 'react-otp-input';
import Button from '../components/Button/Button';
import LoginIllustation from '../assets/Secure login-bro 2.svg';
import Logo from '../assets/Logo.svg';
import SuccessCheckmark from '../components/checkMark/successCheckMark';
import FailCheckmark from '../components/checkMark/errorCheckMark';
import authAction from '../redux/actions/authAction';
import TimeCount from '../helpers/timeCount';
import TwoFactorSchema from '../validations/twoFactor';

const TwoFactorAuth = () => {
	const [OTP, setOTP] = useState('');
	const [otpErrors, setotpErrors] = useState(null);
	const dispatch = useDispatch();
	const { loading, error, token, user } = useSelector((state) => state.auth);
	const [seconds, setSeconds] = useState(300);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const isValid = await TwoFactorSchema.validate({ otp: OTP });
			if (isValid) {
				return dispatch(authAction(OTP));
			}
		} catch (error) {
			setotpErrors(error.errors);
		}
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
	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (user?.RoleId === 2) return navigate('/vendor');
		if (user?.RoleId === 1) return navigate('/admin');
	}, [user, navigate]);

	return (
		<form data-testid="twofactorpage" onSubmit={handleSubmit}>
			<div className=" shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.05),inset_0px_2px_3px_0px_rgba(0,0,0,0.1)] text-center px-0 py-[8em]">
				<div className="hidden w-2/5 md:flex items-center justify-center">
					<img src={LoginIllustation} alt="" className="w-9/12 " />
				</div>
				<div className="absolute top-[40px] left-[50px] middle:hidden">
					<img src={Logo} alt="" className="" />
				</div>
				<div className="otpMiniContainer bg-gradient-to-b from-green-400 to-green-100 via-green-200 text-[#225F33] bg-[#92E3A9] middle:bg-[#92E3A9] absolute w-full sm:w-[500px] md:w-[700px] xl:w-[800px] -translate-x-2/4 -translate-y-2/4 p-[100px] rounded-[10px] left-2/4 top-2/4">
					<div className="text-[45px] relative bottom-10 md:text-[1.25em] mt-0 mb-[0.4em] mx-0 iphoneSE:text-[30px] samsung:text-[30px]">
						{token && <SuccessCheckmark />}
						{error && <FailCheckmark error={error} />}
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
					<div>
						<OTPInput
							numInputs={6}
							shouldAutoFocus={true}
							renderSeparator={<span>-</span>}
							value={OTP}
							onChange={setOTP}
							inputStyle="otpInput"
							containerStyle="otpContainer"
							placeholder="012345"
							// inputType="tel"
							renderInput={(props) => <input {...props} />}
						/>
						{otpErrors &&
							otpErrors.map((err, index) => <p key={index}>{err}</p>)}
					</div>
					<div className="relative top-4 md:text-center text-[1.2em] w-full px-0 py-[1em]">
						<Button
							label={loading ? 'Verifying...' : 'CONTINUE'}
							className=" rounded-[50px] px-[1.5em] py-[0.5em] bg-primaryGreen w-[200px] text-[#92E3A9] font-bold p-[20px],inset_0px_2px_1px_0px_rgba(255,255,255,0.75)] hover:bg-emerald-500  samsung:relative samsung:left-[-15px]"
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
