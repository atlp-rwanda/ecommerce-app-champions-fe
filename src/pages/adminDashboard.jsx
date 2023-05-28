/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { BsChatText } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/vendorDashboard/Navbar';
import Sidebar from '../components/vendorDashboard/Sidebar';
import Ecommerce from '../components/vendorDashboard/Ecommerce';
import { useStateContext } from '../contexts/ContextProvider';
import UserManagement from '../components/dashboard/UserManagement';
import { handleToken } from '../redux/actions/token.action';
import LiveChat from '../components/LiveChat';
import Button from '../components/Button/Button';

const adminDashboard = () => {
	const { activeMenu } = useStateContext();
	const [showEcommerce, setShowEcommerce] = useState(true);
	const [showSales, setShowSales] = useState(false);
	const [showProducts, setShowProducts] = useState(false);
	const [showDashboard, setShowDashboard] = useState(false);
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
	return (
		<div className="flex relative w-screen ">
			{showChat && LiveChat ? <LiveChat /> : ''}
			{activeMenu ? (
				<div className="w-48 fixed sidebar">
					<Sidebar
						showEcommerce={showEcommerce}
						setShowEcommerce={setShowEcommerce}
						showSales={showSales}
						setShowSales={setShowSales}
						setShowProducts={setShowProducts}
						showDashboard={showDashboard}
						setShowDashboard={setShowDashboard}
					/>
				</div>
			) : (
				<div className="w-0 ">
					<Sidebar
						showEcommerce={showEcommerce}
						setShowEcommerce={setShowEcommerce}
						showSales={showSales}
						setShowSales={setShowSales}
						setShowProducts={setShowProducts}
						showDashboard={showDashboard}
						setShowDashboard={setShowDashboard}
					/>
				</div>
			)}
			<div
				className={`bg-main-bg min-h-screen w-full ${
					activeMenu ? 'md:ml-72' : 'flex-2'
				}`}
			>
				<div className="fixed md:static bg-main-bg navbar w-full ">
					<Navbar />
				</div>

				<div>
					{showEcommerce && <Ecommerce />}
					{showDashboard && <UserManagement />}
				</div>
			</div>
			<Button
				handleClick={toggleChat}
				label={<BsChatText size={22} />}
				className="fixed z-50 flex items-center justify-center font-bold text-white rounded-full bg-primaryGreen w-14 h-14 bottom-4 right-4"
			/>
			<ToastContainer />
		</div>
	);
};

export default adminDashboard;
