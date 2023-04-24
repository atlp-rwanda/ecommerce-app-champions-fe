import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

import { Header } from './components/Header';

import './App.css';
import ProductList from './components/product/ProductList';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
			<ProductList />
		</>
	);
}

export default App;
