import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Auth/Input';

import LoginIllustation from '../assets/Secure login-bro 2.svg';
import Logo from '../assets/Logo.svg';

const TwoFactorAuth = () => {
	return (
		<form action="" className="">
			<div className="shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.05),inset_0px_2px_3px_0px_rgba(0,0,0,0.1)] text-center px-0 py-[8em]">
				<div className="hidden w-2/5 md:flex items-center justify-center">
					<img src={LoginIllustation} alt="" className="w-9/12" />
				</div>
				<div className="absolute top-[40px] left-[50px]">
					<img src={Logo} alt="" className="" />
				</div>
				<div className="text-[#225F33] bg-[#92E3A9] absolute w-full sm:w-[500px] md:w-[700px] xl:w-[800px] -translate-x-2/4 -translate-y-2/4 p-[100px] rounded-[10px] left-2/4 top-2/4">
					<div className="text-[45px] relative bottom-10 md:text-[1.25em] mt-0 mb-[0.4em] mx-0">
						<h1>
							<b>Account Verification</b>
						</h1>
					</div>
					<div className="text-[15px] relative bottom-5">
						<div className="pb-[10px]">
							<p>
								Enter the one time password code sent to your email to verify
								your identity and gain access to your account
							</p>
						</div>
						<h2>Expires In: </h2>
					</div>
					<div className="md:leading-[1.75em] text-[10pt] tracking-[0]">
						<Input placeholder="xxx-xxx" />
					</div>
					<div className="relative top-4 md:text-center text-[1.2em] w-full px-0 py-[1em]">
						<Button
							label="CONTINUE"
							className="bg-primaryGreen text-[#92E3A9] font-bold shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.5),inset_0px_2px_1px_0px_rgba(255,255,255,0.75)] hover:bg-emerald-500"
						/>
					</div>
					<div className="relative top-[40px]">
						<p>
							<b>Didn't receive the Code?</b>{' '}
							<b className="text-[#DEF7E5] cursor-pointer hover:text-white">
								try again
							</b>
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default TwoFactorAuth;
