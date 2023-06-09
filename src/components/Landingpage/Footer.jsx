import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillLinkedin,
} from 'react-icons/ai';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col w-screen">
			<div className="grid items-center justify-between grid-cols-2 px-8 py-5 w-fulll bg-lightYellow middle:grid-cols-3 md:grid-cols-4 ">
				<div>
					<h1 className="font-bold">{t('Company')}</h1>
					<p>{t('About')}</p>
					<p>{t('Why')}</p>
					<p>{t('Pricing')}</p>
					<p>{t('Testimonial')}</p>
					<p>
						<Link to="/vendor">{t('Become')}</Link>
					</p>
				</div>

				<div>
					<h1 className="font-bold">{t('Resources')}</h1>
					<p>{t('Privacy')}</p>
					<p>{t('Terms')}</p>
					<p>{t('Blog')}</p>
					<p>{t('Contact')}</p>
				</div>

				<div>
					<h1 className="font-bold">{t('Product')}</h1>
					<p>{t('Trending')}</p>
					<p>{t('ProductTracking')}</p>
					<p>{t('Time')}</p>
					<p>{t('Shipping')}</p>
					<p>{t('Manufacturers')}</p>
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
				<h1>{t('Copyright')} &copy; 2023</h1>
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
