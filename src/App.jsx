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
import { UpdateProduct } from './pages/UpdateProduct';
import CreateProduct from './pages/Createproduct';
import SingleProductPage from './pages/SingleProductPage';
import { ProductPage } from './pages/ProductPage';
import SellerProductPage from './pages/SellerProductPage';
import Topnav from './components/Landingpage/topnav';
import Footer from './components/Landingpage/Footer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					path="/buyer"
					element={
						<>
							<Topnav displaySearchBar />
							<BuyerSignupPage />
							<Footer />
						</>
					}
				/>
				<Route
					path="/vendor"
					element={
						<>
							<Topnav displaySearchBar />
							<VendorSignupPage />
							<Footer />
						</>
					}
				/>
				<Route path="/Login" element={<LoginPage />} />
				<Route
					path="/ForgotPassword"
					element={
						<>
							<Topnav displaySearchBar />
							<ForgotPassword />
							<Footer />
						</>
					}
				/>
				<Route
					path="/ResetPassword"
					element={
						<>
							<Topnav displaySearchBar />
							<ResetPassword />
							<Footer />
						</>
					}
				/>
				<Route path="/auth" element={<TwoFactorAuth />} />
				<Route
					path="/profile"
					element={
						<>
							<Topnav />
							<ProfilePage />
							<Footer />
						</>
					}
				/>
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/vendors" element={<VendorDashboard />} />
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
					path="/product"
					element={
						<>
							<Topnav displaySearchBar />
							<ProductPage />
							<Footer />
						</>
					}
				/>

				<Route
					path="/product/:productId"
					element={
						<>
							<Topnav displaySearchBar />
							<SingleProductPage />
							<Footer />
						</>
					}
				/>

				<Route path="*" element={<PageNotFound />} />
				<Route path="/AddProduct" element={<CreateProduct />} />
				<Route path="/vendors/:id" element={<UpdateProduct />} />
				<Route
					path="SellerProductPage/:productId"
					element={<SellerProductPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
