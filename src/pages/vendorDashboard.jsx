/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChatText } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/vendorDashboard/Navbar';
import VendorSidebar from '../components/vendorDashboard/vendorSidebar';
import Products from '../components/dashboard/products';
import Ecommerce from '../components/vendorDashboard/Ecommerce';
import { useStateContext } from '../contexts/ContextProvider';
import { getVendorProducts } from '../redux/actions/vendor.product';
import { getNotifications } from '../redux/actions/notifications';
import Loader from '../components/vendorDashboard/Loader';
import LiveChat from '../components/LiveChat';
import { handleToken } from '../redux/actions/token.action';
import Button from '../components/Button/Button';

const vendorDashboard = () => {
	const { activeMenu } = useStateContext();
	const [showEcommerce, setShowEcommerce] = useState(true);
	const [showSales, setShowSales] = useState(false);
	const [showProducts, setShowProducts] = useState(false);
	const { loading, error } = useSelector((state) => state.vendorProducts);
	const { loading: notLoading, error: notError } = useSelector(
		(state) => state.notifications
	);
	const { token } = useSelector((state) => state.token);
	const [showChat, setShowChat] = useState(false);

	const dispatch = useDispatch();
	const toggleChat = () => {
		if (!token) {
			toast.warn('login first!', { position: 'top-right' });
		}

		setShowChat(!showChat);
	};

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getVendorProducts(token));
		dispatch(getNotifications());
	}, [dispatch, token]);

	useEffect(() => {
		if (error) {
			toast.error(error);
			return;
		}
		if (notError) {
			toast.error(notError);
		}
	}, [error, notError]);
	return (
		<>
			{loading || notLoading ? (
				<Loader />
			) : (
				<div>
					{showChat && LiveChat ? <LiveChat /> : ''}
					<div className="flex relative bg-[#DBE4EE]">
						{activeMenu ? (
							<div className="fixed bg-white w-72 sidebar ">
								<VendorSidebar
									showEcommerce={showEcommerce}
									setShowEcommerce={setShowEcommerce}
									showSales={showSales}
									setShowSales={setShowSales}
									setShowProducts={setShowProducts}
								/>
							</div>
						) : (
							<div className="w-0 ">
								<VendorSidebar
									showEcommerce={showEcommerce}
									setShowEcommerce={setShowEcommerce}
									showSales={showSales}
									setShowSales={setShowSales}
									setShowProducts={setShowProducts}
								/>
							</div>
						)}
						<div
							className={`bg-main-bg min-h-screen w-full ${
								activeMenu ? 'md:ml-72' : 'flex-2'
							}`}
						>
							<div className="fixed w-full md:static bg-main-bg navbar ">
								<Navbar />
							</div>

							<div>
								{showEcommerce && <Ecommerce />}
								{showProducts && <Products />}
							</div>
						</div>
					</div>
					<Button
						handleClick={toggleChat}
						label={<BsChatText size={22} />}
						className="fixed z-50 flex items-center justify-center font-bold text-white rounded-full bg-primaryGreen w-14 h-14 bottom-4 right-4"
					/>
					<ToastContainer />
				</div>
			)}
		</>
	);
};
export default vendorDashboard;
