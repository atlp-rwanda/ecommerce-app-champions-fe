/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { paymentSuccessaction } from '../../redux/actions/payment.action';

const PaymentSuccesspage = () => {
	const { t } = useTranslation();
	const searchParams = new URLSearchParams(useLocation().search);
	const token = searchParams.get('token');
	const paymentId = searchParams.get('paymentId');
	const amount = searchParams.get('amount');

	const [isOpen, setIsOpen] = useState(false);

	const { payment } = useSelector((state) => state.payment || {});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClose = async () => {
		setIsOpen(false);
		return navigate('/');
	};

	useEffect(() => {
		dispatch(paymentSuccessaction(token, paymentId, amount));
		if (payment) {
			const cleanURL = window.location.href.split('?')[0];
			history.replaceState(null, null, cleanURL);
			setIsOpen(true);
		}
	}, [dispatch, token, paymentId, payment, amount]);
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
					<h1>{t('payment')}</h1>
					<h2>
						{payment.amountpaid} RWF {t('paid')}
					</h2>
				</div>
			)}
		</div>
	);
};

export default PaymentSuccesspage;
