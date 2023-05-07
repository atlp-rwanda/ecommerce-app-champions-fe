/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from '../components/vendorDashboard/Navbar';
import Sidebar from '../components/vendorDashboard/Sidebar';
import Customers from '../components/vendorDashboard/Customers';
import Products from '../components/vendorDashboard/Products';
import Sales from '../components/vendorDashboard/Sales';
import { useStateContext } from '../contexts/ContextProvider';

const vendorDashboard = () => {
	const { activeMenu } = useStateContext();
	return (
		<div>
			<div className="flex relative">
				{activeMenu ? (
					<div className="w-72 fixed sidebar bg-white ">
						<Sidebar />
					</div>
				) : (
					<div className="w-0 ">
						<Sidebar />
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
				</div>
			</div>
		</div>
	);
};

import Products from '../components/dashboard/products';
import CreateProduct from './Createproduct';

const VendorDashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex justify-center  h-screen pr-4 ">
			{isOpen ? (
				<CreateProduct setIsOpen={setIsOpen} />
			) : (
				<Products setIsOpen={setIsOpen} />
			)}
		</div>
	);
};
export default VendorDashboard;
