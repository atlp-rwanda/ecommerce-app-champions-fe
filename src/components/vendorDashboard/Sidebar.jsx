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
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../contexts/ContextProvider';

const Sidebar = ({ setShowEcommerce, setShowSales, setShowProducts }) => {
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
		} else if (link === 'sales') {
			setShowEcommerce(false);
			setShowSales(true);
			setShowProducts(false);
		} else if (link === 'products') {
			setShowProducts(true);
			setShowEcommerce(false);
			setShowSales(false);
		} else {
			setShowEcommerce(true);
		}
	};
	return (
		<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
			{activeMenu && (
				<>
					<div className="flex justify-between items-center">
						<Link
							to="/vendors"
							onClick={handleCloseSideBar}
							className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
						>
							<SiShopware />
							<span>Shopmart</span>
						</Link>
						<TooltipComponent content="Menu" position="BottomCenter">
							<button
								type="button"
								onClick={() =>
									setActiveMenu((prevActiveMenu) => !prevActiveMenu)
								}
								className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block z-index-10000"
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div>
						<p className="text-gray-400 m-3 mt-4 uppercase relative left-[10px]">
							dashboard
						</p>
						<div
							className="side-container gap-5 rounded-lg hover:bg-white text-md pl-4 pt-3 pb-2.5 flex flex-row relative left-[32px] top-[10px] cursor-pointer"
							onClick={() => handleLinkClick('ecommerce')}
						>
							<FiShoppingBag className="relative top-[4px]" />
							<span className=" capitalize">Ecommerce</span>
						</div>
						<div>
							<p className="text-gray-400 m-3 mt-4 uppercase relative left-[10px]">
								Pages
							</p>
							<div
								className="gap-5 rounded-lg hover:bg-white text-md pl-4 pt-3 pb-2.5  flex flex-row relative left-[32px] top-[10px] cursor-pointer"
								onClick={() => handleLinkClick('sales')}
							>
								<AiOutlineShoppingCart className="relative top-[4px]" />
								<span className="capitalize">Sales</span>
							</div>
							<div className="gap-5 rounded-lg hover:bg-white text-md pl-4 pt-3 pb-2.5 flex flex-row relative left-[32px] top-[10px] cursor-pointer">
								<IoMdContacts className="relative top-[4px]" />
								<span className="capitalize">Employees</span>
							</div>
							<div
								className="gap-5 rounded-lg hover:bg-white text-md pl-4 pt-3 pb-2.5 flex flex-row relative left-[32px] top-[10px] cursor-pointer"
								onClick={() => handleLinkClick('products')}
							>
								<MdOutlineProductionQuantityLimits className="relative top-[4px]" />
								<span className="capitalize">Products</span>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
