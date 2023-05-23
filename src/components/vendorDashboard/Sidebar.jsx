/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
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

const Sidebar = ({
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
	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  bg-#225F33 text-md m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2';
	const handleLinkClick = (link) => {
		if (link === 'ecommerce') {
			setShowEcommerce(true);
			setShowSales(false);
			setShowProducts(false);
			setShowDashboard(false);
		} else if (link === 'sales') {
			setShowEcommerce(false);
			setShowSales(true);
			setShowProducts(false);
			setShowDashboard(false);
		} else if (link === 'products') {
			setShowProducts(true);
			setShowEcommerce(false);
			setShowSales(false);
			setShowDashboard(false);
		} else if (link === 'users') {
			setShowDashboard(true);
			setShowProducts(false);
			setShowEcommerce(false);
			setShowSales(false);
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
							<SiShopware />
							<span>Shopmart</span>
						</Link>
						<button
							type="button"
							onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
							className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block z-index-10000"
						>
							<MdOutlineCancel />
						</button>
					</div>
					<div>
						<p className="text-gray-400 m-2 mt-3 uppercase font-bold">
							dashboard
						</p>
						<div
							className="side-container hover:rounded-lg hover:bg-white text-md p-2 flex flex-row items-center space-x-4 cursor-pointer"
							onClick={() => handleLinkClick('ecommerce')}
						>
							<FiShoppingBag />
							<span className="capitalize">Ecommerce</span>
						</div>
						<div>
							<p className="text-gray-400 m-2 mt-4 uppercase relative font-bold">
								Pages
							</p>
							<div
								className="gap-5 rounded-lg hover:bg-white text-md p-2  flex flex-row cursor-pointer"
								onClick={() => handleLinkClick('sales')}
							>
								<AiOutlineShoppingCart />
								<span className="capitalize">Sales</span>
							</div>
							<div
								className="hover:bg-white hover:rounded-lg text-md p-2 flex flex-row items-center space-x-4 cursor-pointer"
								onClick={() => handleLinkClick('products')}
							>
								<MdOutlineProductionQuantityLimits />
								<span className="capitalize">Products</span>
							</div>
							<div
								className="rounded-lg hover:bg-white text-md p-2 flex flex-row items-center space-x-4 cursor-pointer"
								onClick={() => handleLinkClick('users')}
							>
								<AiOutlineUsergroupDelete />
								<span className="capitalize">Users</span>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
