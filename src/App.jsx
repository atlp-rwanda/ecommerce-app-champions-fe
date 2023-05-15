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
				<Route path="/cart" element={<CartPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
