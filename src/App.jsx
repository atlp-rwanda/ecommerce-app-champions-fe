import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BuyerSignupPage from './pages/BuyerSignupPage';
import VendorSignupPage from './pages/VendorSignupPage';
import LoginPage from './pages/LoginPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/buyer" element={<BuyerSignupPage />} />
				<Route path="/vendor" element={<VendorSignupPage />} />
				<Route path="/Login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
