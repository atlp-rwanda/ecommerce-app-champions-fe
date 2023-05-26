/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import Cookies from 'js-cookie';

const LoginSuccesspage = () => {
	const searchParams = new URLSearchParams(useLocation().search);
	const token = searchParams.get('token');
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	const handleClose = async () => {
		setIsOpen(false);
		return navigate('/');
	};

	useEffect(() => {
		if (token) {
			Cookies.set('token', token, { expires: 7 });
			setIsOpen(true);
			setTimeout(() => {
				const cleanURL = window.location.href.split('?')[0];
				history.replaceState(null, null, cleanURL);
				navigate('/');
			}, 2000);
		}
		if (!token) {
			const cleanURL = window.location.href.split('?')[0];
			history.replaceState(null, null, cleanURL);
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
	}, [navigate, token]);
	return (
		<div className="h-screen flex justify-center items-center">
			{isOpen && (
				<div className=" relative flex flex-col w-3/4 md:w-2/4 items-center justify-center  rounded-md h-80 p-5  bg-gradient-to-b from-green-400 to-green-100 via-green-200 text-[#225F33] bg-[#92E3A9] middle:bg-[#92E3A9] ">
					<button
						className="absolute top-0 right-0 p-2   text-rosy_brown font-bold "
						onClick={handleClose}
					>
						<RiCloseLine size={24} />
					</button>
					<FiCheckCircle size={57} />
					<h1>You Loggedin with google </h1>
				</div>
			)}
		</div>
	);
};

export default LoginSuccesspage;
