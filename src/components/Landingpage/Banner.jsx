/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import i18n from '../../Translation-i18n/i18n';

const Banner = () => {
	const { t } = useTranslation();
	useEffect(() => {
		// Retrieve the selected language from localStorage
		const selectedLanguage = localStorage.getItem('language');
		if (selectedLanguage) {
			i18n.changeLanguage(selectedLanguage);
		}
	}, []);

	const onChange = (event) => {
		const selectedLanguage = event.target.value;
		// Save the selected language to localStorage
		localStorage.setItem('language', selectedLanguage);
		i18n.changeLanguage(selectedLanguage);
	};
	return (
		<div className="flex bg-wheat px-8 py-4 h-10 w-screen justify-between  items-center  text-primaryGreen">
			<div className=" hidden md:flex  items-center space-x-2">
				<BsFillTelephoneFill size={14} />
				<p>+250 787938344</p>
			</div>
			<p className="hidden md:flex text-md">{t('banner')}</p>
			<div className=" items-center mt-0 ">
				<select
					name="language"
					onChange={onChange}
					value={localStorage.getItem('language')}
					className="border-none  font-bold  text-primaryGreen bg-wheat appearance-none outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent"
				>
					<option className="text-sm" value="en">
						Eng
					</option>
					<option className="text-sm" value="fr">
						Fr
					</option>
				</select>
			</div>
		</div>
	);
};

export default Banner;
