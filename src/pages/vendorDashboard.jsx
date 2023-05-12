/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import Navbar from '../components/vendorDashboard/Navbar';
import Sidebar from '../components/vendorDashboard/Sidebar';
import Products from '../components/vendorDashboard/Products';
import Ecommerce from '../components/vendorDashboard/Ecommerce';
import Sales from '../components/vendorDashboard/Sales';
import { useStateContext } from '../contexts/ContextProvider';

const vendorDashboard = () => {
	const { activeMenu } = useStateContext();
	const [showEcommerce, setShowEcommerce] = useState(true);
	const [showSales, setShowSales] = useState(false);
	const [showProducts, setShowProducts] = useState(false);

	return (
		<div>
			<div className="flex relative ">
				{activeMenu ? (
					<div className="w-72 fixed sidebar bg-white ">
						<Sidebar
							showEcommerce={showEcommerce}
							setShowEcommerce={setShowEcommerce}
							showSales={showSales}
							setShowSales={setShowSales}
							setShowProducts={setShowProducts}
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
						{showSales && <Sales />}
						{showProducts && <Products />}
					</div>
				</div>
			</div>
		</div>
	);
};
export default vendorDashboard;
