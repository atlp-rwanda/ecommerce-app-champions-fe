import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillLinkedin,
} from 'react-icons/ai';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
	return (
		<div className="">
			<div className="w-full h-100 md:w-full bg-lightYellow px-7 py-5 grid grid-cols-2 middle:grid-cols-3 md:grid-cols-4  justify-between  items-center ">
				<div>
					<h1 className="font-bold">Company</h1>
					<p>About Us</p>
					<p>Why Choose us</p>
					<p>Pricing</p>
					<p>Testimonial</p>
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
					<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
				</div>
			</div>
			<div className="w-screen h-100 md:w-full bg-lightYellow px-7 py-5  flex justify-between  items-center">
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
