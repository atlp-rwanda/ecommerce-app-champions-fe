/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/vendorDashboard/Navbar';
import VendorSidebar from '../components/vendorDashboard/vendorSidebar';
import Products from '../components/dashboard/products';
import Ecommerce from '../components/vendorDashboard/Ecommerce';
import { useStateContext } from '../contexts/ContextProvider';
import { getVendorProducts } from '../redux/actions/vendor.product';
import { getNotifications } from '../redux/actions/notifications';
import Loader from '../components/vendorDashboard/Loader';
import varKeys from '../constants/keys';

const vendorDashboard = () => {
	const token = Cookies.get('token');
	const dispatch = useDispatch();
	const { activeMenu } = useStateContext();
	const [showEcommerce, setShowEcommerce] = useState(true);
	const [showSales, setShowSales] = useState(false);
	const [showProducts, setShowProducts] = useState(false);
	const { loading, error } = useSelector((state) => state.vendorProducts);
	const { loading: notLoading, error: notError } = useSelector(
		(state) => state.notifications
	);

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
			<ToastContainer />
			{loading || notLoading ? (
				<Loader />
			) : (
				<div>
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
				</div>
			)}
		</>
	);
};
export default vendorDashboard;
