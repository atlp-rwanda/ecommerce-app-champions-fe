/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEn = {
	motivationword: 'Shopping and Shipping Made Easier',
	motivationword1:
		'You can buy and sell any product on our platform easily and the shipping is made directly',
	more: 'more',
	deal: 'Todays Best Deals for You!',
	All: 'All',
	food: 'food',
	fashion: 'fashion',
	electronics: 'electronics',
	banner: 'Get 50% off on selected Item , shop now',
	clothes: 'clothes',
	seeall: 'See All',
	Notfound: 'No Product Found !',
	products: 'Products',
	Profile: 'Profile',
	Orders: 'Orders',
	Wishlist: 'Wishlist',
	Logout: 'Logout',
	Login: 'Login',
	Search: 'Search for product.... ',
	AddtoCart: 'Add to Cart',
	Company: 'Company',
	About: 'About Us',
	Why: 'Why Choose us',
	Pricing: 'Pricing',
	Testimonial: 'Testimonial',
	Become: 'Become vendor',
	Resources: 'Resources',
	Privacy: 'Privacy Policy',
	Terms: 'Terms and Condition',
	Blog: 'Blog',
	Contact: 'Contact Us',
	Product: 'Product',
	Trending: 'Trending products',
	ProductTracking: 'Product Tracking',
	Time: 'Time schedule',
	Shipping: 'Shipping',
	Manufacturers: 'Manufacturers',
	Copyright: 'Copyright',
	payment: 'payment successful',
	paid: 'paid',
	loggedin: 'You Loggedin with google',
};

const translationFr = {
	loggedin: 'Vous êtes connecté avec Google',
	payment: 'paiement réussi',
	paid: 'payé',
	motivationword: 'Achats et expédition simplifiés',
	motivationword1:
		" Vous pouvez facilement acheter et vendre n'importe quel produit sur notre plateforme et l'expédition se fait directement",
	deal: 'Les meilleures offres du jour pour vous !',
	more: 'plus',
	All: 'Toute catégorie',
	food: 'nourriture',
	fashion: 'mode',
	electronics: 'électronique',
	banner:
		"Obtenez 50 % de réduction sur l'article sélectionné, achetez maintenant",
	clothes: 'vêtements',
	seeall: 'Voir tout',
	Notfound: 'Aucun produit trouvé !',
	products: 'Des produits',
	Profile: 'Profil',
	Orders: 'Ordres',
	Wishlist: 'Liste de souhaits',
	Logout: 'Déconnecter',
	Login: 'Connexion',
	Search: 'Recherche de produit....',
	AddtoCart: 'Ajouter au panier',
	Company: 'Entreprise',
	About: 'À propos de nous',
	Why: 'Pourquoi nous choisir',
	Pricing: 'Tarification',
	Testimonial: 'Témoignage',
	Become: 'Devenir vendeur',
	Resources: 'Ressources',
	Privacy: 'politique de confidentialité ',
	Terms: 'Termes et conditions',
	Blog: 'Blog',
	Contact: 'Contactez-nous',
	Product: 'Produit',
	Trending: 'Produits tendance',
	ProductTracking: 'Suivi des produits',
	Time: 'Horaire',
	Shipping: 'Expédition',
	Manufacturers: 'Fabricantes',
	Copyright: "droits d'auteur",
};

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: translationEn },
		fr: { translation: translationFr },
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: { escapeValue: false },
});

export default i18n;
