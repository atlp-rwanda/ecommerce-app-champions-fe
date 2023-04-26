import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const AllPages = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/ForgotPassword" element={<ForgotPassword />} />
			<Route path="/resetPassword" element={<ResetPassword />} />
		</Routes>
	);
};

export default AllPages;
