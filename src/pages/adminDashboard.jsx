/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import Navbar from '../components/vendorDashboard/Navbar';
import Sidebar from '../components/vendorDashboard/Sidebar';
import Ecommerce from '../components/vendorDashboard/Ecommerce';
import { useStateContext } from '../contexts/ContextProvider';
import UserManagement from '../components/dashboard/UserManagement';

const adminDashboard = () => {
	const { activeMenu } = useStateContext();
	const [showEcommerce, setShowEcommerce] = useState(true);
	const [showSales, setShowSales] = useState(false);
	const [showProducts, setShowProducts] = useState(false);
	const [showDashboard, setShowDashboard] = useState(false);
	return (
		<div className="flex relative w-screen ">
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
		</div>
	);
};

export default adminDashboard;
