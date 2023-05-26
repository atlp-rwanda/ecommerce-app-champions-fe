import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BuyerSignupPage from './pages/BuyerSignupPage';
import VendorSignupPage from './pages/VendorSignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import TwoFactorAuth from './pages/Two-factor-auth';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/adminDashboard';
import VendorDashboard from './pages/vendorDashboard';
import CartPage from './pages/CartPage';
import PageNotFound from './components/PageNotFound';
import UpdateProduct from './pages/UpdateProduct';
import CreateProduct from './pages/Createproduct';
import SingleProductPage from './pages/SingleProductPage';
import { ProductPage } from './pages/ProductPage';
import SellerProductPage from './pages/SellerProductPage';
import TrackOrder from './components/product/TrackOrder';
import Topnav from './components/Landingpage/topnav';
import Footer from './components/Landingpage/Footer';
import PaymentSuccesspage from './components/payment/payment';
import Products from './components/dashboard/products';
import Wishlist from './components/wishlist/Wishlist';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/buyer" element={<BuyerSignupPage />} />
				<Route path="/vendor" element={<VendorSignupPage />} />
				<Route path="/Login" element={<LoginPage />} />
				<Route path="/ForgotPassword" element={<ForgotPassword />} />
				<Route path="/ResetPassword" element={<ResetPassword />} />
				<Route path="/auth" element={<TwoFactorAuth />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/vendors" element={<VendorDashboard />} />
				<Route path="/order" element={<TrackOrder />} />
				<Route
					path="/cart"
					element={
						<>
							<Topnav displaySearchBar />
							<CartPage />
							<Footer />
						</>
					}
				/>
				<Route
					path="/paymentsuccess"
					element={
						<>
							<Topnav />
							<PaymentSuccesspage />
							<Footer />
						</>
					}
				/>
				<Route path="/product" element={<ProductPage />} />

				<Route path="/product/:productId" element={<SingleProductPage />} />

				<Route path="*" element={<PageNotFound />} />
				<Route path="/AddProduct" element={<CreateProduct />} />
				<Route path="/vendors/:id" element={<UpdateProduct />} />
				<Route path="/products" element={<Products />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route
					path="SellerProductPage/:productId"
					element={<SellerProductPage />}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
