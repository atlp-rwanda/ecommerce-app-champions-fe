import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BuyerSignupPage from './pages/BuyerSignupPage';
import VendorSignupPage from './pages/VendorSignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import TwoFactorAuth from './pages/Two-factor-auth';
import Profile from './pages/Profile';
import Modal from './components/setting/Modal';
import UserProfile from './components/setting/UserProfile';
import AdminDashboard from './pages/adminDashboard';
import VendorDashboard from './pages/vendorDashboard';
import PageNotFound from './components/PageNotFound';

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
				<Route path="/Profile" element={<Profile />} />
				<Route path="/modal" element={<Modal />} />
				<Route path="/userProfile" element={<UserProfile />} />
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/vendors" element={<VendorDashboard />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
