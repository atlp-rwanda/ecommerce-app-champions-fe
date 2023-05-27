import { Link } from 'react-router-dom';
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillLinkedin,
} from 'react-icons/ai';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
	return (
		<div className="flex flex-col w-screen">
			<div className="grid items-center justify-between grid-cols-2 px-8 py-5 w-fulll bg-lightYellow middle:grid-cols-3 md:grid-cols-4 ">
				<div>
					<h1 className="font-bold">Company</h1>
					<p>About Us</p>
					<p>Why Choose us</p>
					<p>Pricing</p>
					<p>Testimonial</p>
					<p>
						<Link to="/vendor">Become vendor</Link>
					</p>
				</div>

				<div>
					<h1 className="font-bold">Resources</h1>
					<p>Privacy Policy</p>
					<p>Terms and Condition</p>
					<p>Blog</p>
					<p>Contact Us</p>
				</div>

				<div>
					<h1 className="font-bold">Product</h1>
					<p>Trending products</p>
					<p>Product Tracking</p>
					<p>Time schedule</p>
					<p>Shipping</p>
					<p>Manufacturers</p>
				</div>

				<div>
					<Link to="/">
						<img
							src={Logo}
							className="w-32 md:w-40 cursor-pointer"
							alt="Logo"
						/>
					</Link>
				</div>
			</div>
			<div className="flex items-center justify-between w-screen py-5 h-100 md:w-full bg-lightYellow px-7">
				<hr className="w-1/4 font-bold" />
				<h1>Copyright &copy; 2023</h1>
				<span className="flex">
					<AiFillFacebook size={24} />
					<AiFillTwitterSquare size={24} />
					<AiFillInstagram size={24} />
					<AiFillLinkedin size={24} />
				</span>
				<hr className="w-1/4 font-bold" />
			</div>
		</div>
	);
};

export default Footer;
