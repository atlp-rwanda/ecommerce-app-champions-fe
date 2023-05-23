/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SiShopware } from 'react-icons/si';
import {
	MdOutlineCancel,
	MdOutlineProductionQuantityLimits,
} from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import {
	AiOutlineShoppingCart,
	AiOutlineUsergroupDelete,
} from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { useStateContext } from '../../contexts/ContextProvider';

const VendorSidebar = ({
	setShowEcommerce,
	setShowSales,
	setShowProducts,
	setShowDashboard,
}) => {
	const { activeMenu, setActiveMenu, screenSize } = useStateContext();
	const handleCloseSideBar = () => {
		if (activeMenu !== undefined && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	const [activeLink, setActiveLink] = useState('ecommerce');

	const activelink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  bg-light-gray text-md m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2';
	const handleLinkClick = (link) => {
		if (link === 'ecommerce') {
			setShowEcommerce(true);
			setShowSales(false);
			setShowProducts(false);
			setShowDashboard(false);
			setActiveLink(link);
		} else if (link === 'sales') {
			setShowEcommerce(false);
			setShowSales(true);
			setShowProducts(false);
			setShowDashboard(false);
			setActiveLink(link);
		} else if (link === 'products') {
			setShowProducts(true);
			setShowEcommerce(false);
			setShowSales(false);
			setShowDashboard(false);
			setActiveLink(link);
		} else {
			setShowEcommerce(true);
		}
	};
	return (
		<div className="h-screen w-full">
			{activeMenu && (
				<>
					<div className="flex justify-between items-center w-11/12">
						<Link
							to="/vendors"
							onClick={handleCloseSideBar}
							className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
						>
							<SiShopware className="text-[#4B7F52]" />
							<span className="text-[#4B7F52]">Shopmart</span>
						</Link>
						<button
							type="button"
							onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
							className="text-xl text-[#4B7F52] rounded-full p-3 hover:bg-light-gray mt-4 block z-index-10000"
						>
							<MdOutlineCancel />
						</button>
					</div>
					<div>
						<p className="text-gray-400 m-2 mt-3 text-[#4B7F52] uppercase font-bold">
							dashboard
						</p>
						<div
							className={`side-container hover:rounded-lg hover:bg-white text-md p-2 flex flex-row items-center space-x-4 cursor-pointer ${
								activeLink === 'ecommerce' ? activelink : ''
							}`}
							onClick={() => handleLinkClick('ecommerce')}
						>
							<FiShoppingBag />
							<span className="capitalize text-[#087E8B]">Ecommerce</span>
						</div>
						<div>
							<p className="text-gray-400 m-2 mt-4 text-[#4B7F52] uppercase relative font-bold">
								Pages
							</p>
							<div
								className="sideEcommerce  gap-5 rounded-lg hover:bg-white text-md p-2  flex flex-row cursor-pointer"
								onClick={() => handleLinkClick('sales')}
							>
								<AiOutlineShoppingCart />
								<span className="capitalizi text-[#087E8B]">Sales</span>
							</div>
							<div className="sideEcommerce hover:rounded-lg hover:bg-white text-md p-2 flex flex-row items-center space-x-4 cursor-pointer">
								<IoMdContacts />
								<span className="capitalize text-[#087E8B]">Employees</span>
							</div>
							<div
								className="sideEcommerce hover:bg-white hover:rounded-lg text-md p-2 flex flex-row items-center space-x-4 cursor-pointer"
								onClick={() => handleLinkClick('products')}
							>
								<MdOutlineProductionQuantityLimits />
								<span className="capitalize text-[#087E8B]">Products</span>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default VendorSidebar;
