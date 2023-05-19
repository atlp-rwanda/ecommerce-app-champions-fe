/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiBarChart } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { BsBoxSeam, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import {
	MdOutlineSupervisorAccount,
	MdOutlineProductionQuantityLimits,
} from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import passport_photo from './passport_photo.jpg';

export const gridOrderImage = (props) => (
	<div>
		<img
			className="rounded-xl h-20 md:ml-3"
			src={props.ProductImage}
			alt="order-item"
		/>
	</div>
);

export const gridOrderStatus = (props) => (
	<button
		type="button"
		style={{ background: props.StatusBg }}
		className="text-white py-1 px-2 capitalize rounded-2xl text-md"
	>
		{props.Status}
	</button>
);
const gridEmployeeProfile = (props) => (
	<div className="flex items-center gap-2">
		<img
			className="rounded-full w-10 h-10"
			src={props.EmployeeImage}
			alt="employee"
		/>
		<p>{props.Name}</p>
	</div>
);

const gridEmployeeCountry = (props) => (
	<div className="flex items-center justify-center gap-2">
		<GrLocation />
		<span>{props.Country}</span>
	</div>
);
const customerGridImage = (props) => (
	<div className="image flex gap-4">
		<img
			className="rounded-full w-10 h-10"
			src={props.CustomerImage}
			alt="employee"
		/>
		<div>
			<p>{props.CustomerName}</p>
			<p>{props.CustomerEmail}</p>
		</div>
	</div>
);

const customerGridStatus = (props) => (
	<div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
		<p
			style={{ background: props.StatusBg }}
			className="rounded-full h-3 w-3"
		/>
		<p>{props.Status}</p>
	</div>
);
export const customersGrid = [
	{
		field: 'ProjectName',
		headerText: 'Product Name',
		width: '150',
		textAlign: 'Center',
	},
	{
		field: 'Status',
		headerText: 'Status',
		width: '130',
		format: 'yMd',
		textAlign: 'Center',
		template: customerGridStatus,
	},
	{
		field: 'Weeks',
		headerText: 'Price',
		width: '100',
		format: 'C2',
		textAlign: 'Center',
	},
	{
		field: 'Budget',
		headerText: 'Quantity',
		width: '100',
		format: 'yMd',
		textAlign: 'Center',
	},

	{
		field: 'Location',
		headerText: 'Category',
		width: '150',
		textAlign: 'Center',
	},

	{
		field: 'CustomerID',
		headerText: 'Bonus',
		width: '120',
		textAlign: 'Center',
		isPrimaryKey: true,
	},
	{
		field: 'CustomerID',
		headerText: 'Actions',
		width: '120',
		textAlign: 'Center',
		template: () => (
			<div className="align">
				<BiEdit className="edit text-blue-600 mr-2 cursor-pointer size={24}" />
				<AiFillDelete className="delete text-red-600 cursor-pointer" />
			</div>
		),
	},
];

export const employeesGrid = [
	{
		headerText: 'Employee',
		width: '150',
		template: gridEmployeeProfile,
		textAlign: 'Center',
	},
	{ field: 'Name', headerText: '', width: '0', textAlign: 'Center' },
	{
		field: 'Title',
		headerText: 'Designation',
		width: '170',
		textAlign: 'Center',
	},
	{
		headerText: 'Country',
		width: '120',
		textAlign: 'Center',
		template: gridEmployeeCountry,
	},

	{
		field: 'HireDate',
		headerText: 'Hire Date',
		width: '135',
		format: 'yMd',
		textAlign: 'Center',
	},

	{
		field: 'ReportsTo',
		headerText: 'Reports To',
		width: '120',
		textAlign: 'Center',
	},
	{
		field: 'EmployeeID',
		headerText: 'Employee ID',
		width: '125',
		textAlign: 'Center',
	},
];

export const chatData = [
	{
		image: passport_photo,
		message: 'New product Added',
		desc: 'iphone 12 Pro',
		time: '11:28 AM',
	},
	{
		image: passport_photo,
		message: 'Product Sold',
		desc: 'HP ElitBook',
		time: '12:36 AM',
	},
	{
		image: passport_photo,
		message: 'Product Expired',
		desc: 'iphone 12 Pro',
		time: '4:00 PM',
	},
	{
		image: passport_photo,
		message: 'Product Deleted',
		desc: 'iphone 12 Pro',
		time: '1:12 PM',
	},
];

export const earningData = [
	{
		icon: <MdOutlineSupervisorAccount />,
		amount: '39,354',
		percentage: '-4%',
		title: 'Customers',
		iconColor: '#03C9D7',
		iconBg: '#E5FAFB',
		pcColor: 'red-600',
	},
	{
		icon: <BsBoxSeam />,
		amount: '4,396',
		percentage: '+23%',
		title: 'Products',
		iconColor: 'rgb(255, 244, 229)',
		iconBg: 'rgb(254, 201, 15)',
		pcColor: 'green-600',
	},
	{
		icon: <FiBarChart />,
		amount: '423,39',
		percentage: '+38%',
		title: 'Sales',
		iconColor: 'rgb(228, 106, 118)',
		iconBg: 'rgb(255, 244, 229)',

		pcColor: 'green-600',
	},
	{
		icon: <HiOutlineRefresh />,
		amount: '39,354',
		percentage: '-12%',
		title: 'Refunds',
		iconColor: 'rgb(0, 194, 146)',
		iconBg: 'rgb(235, 250, 242)',
		pcColor: 'red-600',
	},
];

export const userProfileData = [
	{
		icon: <BsCurrencyDollar />,
		title: 'My Profile',
		desc: 'Account Settings',
		iconColor: '#03C9D7',
		iconBg: '#E5FAFB',
	},
	{
		icon: <BsShield />,
		title: 'My Inbox',
		desc: 'Messages & Emails',
		iconColor: 'rgb(0, 194, 146)',
		iconBg: 'rgb(235, 250, 242)',
	},
];

export const ordersGrid = [
	{
		headerText: 'Image',
		template: gridOrderImage,
		textAlign: 'Center',
		width: '120',
	},
	{
		field: 'OrderItems',
		headerText: 'Product Name',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'CustomerName',
		headerText: 'Customer Name',
		width: '150',
		textAlign: 'Center',
	},
	{
		field: 'TotalAmount',
		headerText: 'Total Amount',
		format: 'C2',
		textAlign: 'Center',
		editType: 'numericedit',
		width: '150',
	},
	{
		headerText: 'Status',
		template: gridOrderStatus,
		field: 'OrderItems',
		textAlign: 'Center',
		width: '120',
	},
	{
		field: 'OrderID',
		headerText: 'Order ID',
		width: '120',
		textAlign: 'Center',
	},

	{
		field: 'Location',
		headerText: 'Location',
		width: '150',
		textAlign: 'Center',
	},
];

export const customersData = [
	{
		CustomerID: 1,
		CustomerName: 'iphone 12 Pro Max',
		CustomerEmail: 'vendor@gmail.com',
		CustomerImage: passport_photo,
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$400',
		Budget: '150',
		Location: 'phones',
	},
	{
		CustomerID: 1,
		CustomerName: 'iphone 12 Pro Max',
		CustomerEmail: 'vendor@gmail.com',
		CustomerImage: passport_photo,
		ProjectName: 'iphone 12 Pro',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$400',
		Budget: '150',
		Location: 'phones',
		icon: <MdOutlineProductionQuantityLimits />,
	},
	{
		CustomerID: 2,

		CustomerName: 'iphone 12 Pro Max',
		CustomerEmail: 'sunil@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',

		StatusBg: '#8BE78B',
		Weeks: '$110',
		Budget: '35',
		Location: 'phones',
	},
	{
		CustomerID: 3,

		CustomerName: 'iphone 12 Pro Max',
		CustomerEmail: 'andrew@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Expired',
		StatusBg: '#FEC90F',
		Weeks: '$219',
		Budget: '$24.5k',
		Location: 'USA',
	},
	{
		CustomerID: 2,

		CustomerName: 'Christopher Jamil',
		CustomerEmail: 'jamil@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$340',
		Budget: '16.5k',
		Location: 'phones',
	},
	{
		CustomerID: 1,

		CustomerName: 'Michael',
		CustomerEmail: 'michael@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Inactive',
		StatusBg: 'red',
		Weeks: '$340',
		Budget: '16.5k',
		Location: 'phones',
	},
	{
		CustomerID: 1,
		CustomerName: 'iphone 12 Pro Max',
		CustomerEmail: 'nirav@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$409',
		Budget: '2.4k',
		Location: 'phones',
	},
	{
		CustomerID: 1,

		CustomerName: 'Sunil Joshi',
		CustomerEmail: 'sunil@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',

		StatusBg: '#8BE78B',
		Weeks: '$112',
		Budget: '3.9k',
		Location: 'computer',
	},
	{
		CustomerID: 8,

		CustomerName: 'Andrew McDownland',
		CustomerEmail: 'andrew@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Expired',
		StatusBg: '#FEC90F',
		Weeks: '$190',
		Budget: '24.5k',
		Location: 'phones',
	},
	{
		CustomerID: 9,

		CustomerName: 'Christopher Jamil',
		CustomerEmail: 'jamil@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$340',
		Budget: '16.5k',
		Location: 'phones',
	},
	{
		CustomerID: 10,

		CustomerName: 'Michael',
		CustomerEmail: 'michael@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Inactive',
		StatusBg: 'red',
		Weeks: '$340',
		Budget: '16.5k',
		Location: 'phones',
	},
	{
		CustomerID: 11,
		CustomerName: 'Nirav Joshi',
		CustomerEmail: 'nirav@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$400',
		Budget: '2.4k',
		Location: 'computer',
	},
	{
		CustomerID: 12,

		CustomerName: 'Sunil Joshi',
		CustomerEmail: 'sunil@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',

		StatusBg: '#8BE78B',
		Weeks: '$311',
		Budget: '3.9k',
		Location: 'phones',
	},
	{
		CustomerID: 13,

		CustomerName: 'Andrew McDownland',
		CustomerEmail: 'andrew@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Expired',
		StatusBg: '#FEC90F',
		Weeks: '$197',
		Budget: '24.5k',
		Location: 'phones',
	},
	{
		CustomerID: 14,

		CustomerName: 'Christopher Jamil',
		CustomerEmail: 'jamil@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Active',
		StatusBg: '#8BE78B',
		Weeks: '$345',
		Budget: '16.5k',
		Location: 'computer',
	},
	{
		CustomerID: 15,

		CustomerName: 'Michael',
		CustomerEmail: 'michael@gmail.com',
		ProjectName: 'iphone 12 Pro Max',
		Status: 'Inactive',
		StatusBg: 'red',
		Weeks: '$344',
		Budget: '16.5k',
		Location: 'computer',
	},
];

export const ordersData = [
	{
		OrderID: 10248,
		CustomerName: 'Vinet',

		TotalAmount: 32.38,
		OrderItems: 'Fresh Tomato',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage: product6,
	},
	{
		OrderID: 345653,
		CustomerName: 'Carson Darrin',
		TotalAmount: 56.34,
		OrderItems: 'Butter Scotch',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product5,
	},
	{
		OrderID: 390457,
		CustomerName: 'Fran Perez',
		TotalAmount: 93.31,
		OrderItems: 'Candy Gucci',
		Location: 'New York',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product7,
	},
	{
		OrderID: 893486,
		CustomerName: 'Anika Viseer',
		TotalAmount: 93.31,
		OrderItems: 'Night Lamp',
		Location: 'Germany',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product4,
	},
	{
		OrderID: 748975,
		CustomerName: 'Miron Vitold',
		TotalAmount: 23.99,
		OrderItems: 'Healthcare Erbology',
		Location: 'Spain',
		Status: 'rejected',
		StatusBg: 'red',
		ProductImage: product1,
	},
	{
		OrderID: 94757,
		CustomerName: 'Omar Darobe',
		TotalAmount: 95.99,
		OrderItems: 'Makeup Lancome Rouge',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product2,
	},
	{
		OrderID: 944895,
		CustomerName: 'Lulia albu',
		TotalAmount: 17.99,
		OrderItems: 'Skincare',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product3,
	},
	{
		OrderID: 845954,
		CustomerName: 'Penjani',
		TotalAmount: 59.99,
		OrderItems: 'Headphone',
		Location: 'USA',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product4,
	},
	{
		OrderID: 845954,
		CustomerName: 'Jie Yan',
		TotalAmount: 87.99,
		OrderItems: 'Shoes',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage:
			'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 38489,
		CustomerName: 'Miron',
		TotalAmount: 87.99,
		OrderItems: 'Ice Cream',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage:
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
	},
	{
		OrderID: 24546,
		CustomerName: 'Frank',
		TotalAmount: 84.99,
		OrderItems: 'Pan Cake',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage:
			'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 10248,
		CustomerName: 'Vinet',

		TotalAmount: 32.38,
		OrderItems: 'Fresh Tomato',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage: product6,
	},
	{
		OrderID: 345653,
		CustomerName: 'Carson Darrin',
		TotalAmount: 56.34,
		OrderItems: 'Butter Scotch',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product5,
	},
	{
		OrderID: 390457,
		CustomerName: 'Fran Perez',
		TotalAmount: 93.31,
		OrderItems: 'Candy Gucci',
		Location: 'New York',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product7,
	},
	{
		OrderID: 893486,
		CustomerName: 'Anika Viseer',
		TotalAmount: 93.31,
		OrderItems: 'Night Lamp',
		Location: 'Germany',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product4,
	},
	{
		OrderID: 748975,
		CustomerName: 'Miron Vitold',
		TotalAmount: 23.99,
		OrderItems: 'Healthcare Erbology',
		Location: 'Spain',
		Status: 'rejected',
		StatusBg: 'red',
		ProductImage: product1,
	},
	{
		OrderID: 94757,
		CustomerName: 'Omar Darobe',
		TotalAmount: 95.99,
		OrderItems: 'Makeup Lancome Rouge',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product2,
	},
	{
		OrderID: 944895,
		CustomerName: 'Lulia albu',
		TotalAmount: 17.99,
		OrderItems: 'Skincare',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product3,
	},
	{
		OrderID: 845954,
		CustomerName: 'Penjani',
		TotalAmount: 59.99,
		OrderItems: 'Headphone',
		Location: 'USA',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product4,
	},
	{
		OrderID: 845954,
		CustomerName: 'Jie Yan',
		TotalAmount: 87.99,
		OrderItems: 'Shoes',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage:
			'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 38489,
		CustomerName: 'Miron',
		TotalAmount: 87.99,
		OrderItems: 'Ice Cream',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage:
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
	},
	{
		OrderID: 24546,
		CustomerName: 'Frank',
		TotalAmount: 84.99,
		OrderItems: 'Pan Cake',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage:
			'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 10248,
		CustomerName: 'Vinet',

		TotalAmount: 32.38,
		OrderItems: 'Fresh Tomato',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage: product6,
	},
	{
		OrderID: 345653,
		CustomerName: 'Carson Darrin',
		TotalAmount: 56.34,
		OrderItems: 'Butter Scotch',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product5,
	},
	{
		OrderID: 390457,
		CustomerName: 'Fran Perez',
		TotalAmount: 93.31,
		OrderItems: 'Candy Gucci',
		Location: 'New York',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product7,
	},
	{
		OrderID: 893486,
		CustomerName: 'Anika Viseer',
		TotalAmount: 93.31,
		OrderItems: 'Night Lamp',
		Location: 'Germany',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product4,
	},
	{
		OrderID: 748975,
		CustomerName: 'Miron Vitold',
		TotalAmount: 23.99,
		OrderItems: 'Healthcare Erbology',
		Location: 'Spain',
		Status: 'rejected',
		StatusBg: 'red',
		ProductImage: product1,
	},
	{
		OrderID: 94757,
		CustomerName: 'Omar Darobe',
		TotalAmount: 95.99,
		OrderItems: 'Makeup Lancome Rouge',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product2,
	},
	{
		OrderID: 944895,
		CustomerName: 'Lulia albu',
		TotalAmount: 17.99,
		OrderItems: 'Skincare',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product3,
	},
	{
		OrderID: 845954,
		CustomerName: 'Penjani',
		TotalAmount: 59.99,
		OrderItems: 'Headphone',
		Location: 'USA',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product4,
	},
	{
		OrderID: 845954,
		CustomerName: 'Jie Yan',
		TotalAmount: 87.99,
		OrderItems: 'Shoes',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage:
			'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 38489,
		CustomerName: 'Miron',
		TotalAmount: 87.99,
		OrderItems: 'Ice Cream',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage:
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
	},
	{
		OrderID: 24546,
		CustomerName: 'Frank',
		TotalAmount: 84.99,
		OrderItems: 'Pan Cake',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage:
			'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 10248,
		CustomerName: 'Vinet',

		TotalAmount: 32.38,
		OrderItems: 'Fresh Tomato',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage: product6,
	},
	{
		OrderID: 345653,
		CustomerName: 'Carson Darrin',
		TotalAmount: 56.34,
		OrderItems: 'Butter Scotch',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product5,
	},
	{
		OrderID: 390457,
		CustomerName: 'Fran Perez',
		TotalAmount: 93.31,
		OrderItems: 'Candy Gucci',
		Location: 'New York',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product7,
	},
	{
		OrderID: 893486,
		CustomerName: 'Anika Viseer',
		TotalAmount: 93.31,
		OrderItems: 'Night Lamp',
		Location: 'Germany',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product4,
	},
	{
		OrderID: 748975,
		CustomerName: 'Miron Vitold',
		TotalAmount: 23.99,
		OrderItems: 'Healthcare Erbology',
		Location: 'Spain',
		Status: 'rejected',
		StatusBg: 'red',
		ProductImage: product1,
	},
	{
		OrderID: 94757,
		CustomerName: 'Omar Darobe',
		TotalAmount: 95.99,
		OrderItems: 'Makeup Lancome Rouge',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage: product2,
	},
	{
		OrderID: 944895,
		CustomerName: 'Lulia albu',
		TotalAmount: 17.99,
		OrderItems: 'Skincare',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage: product3,
	},
	{
		OrderID: 845954,
		CustomerName: 'Penjani',
		TotalAmount: 59.99,
		OrderItems: 'Headphone',
		Location: 'USA',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage: product4,
	},
	{
		OrderID: 845954,
		CustomerName: 'Jie Yan',
		TotalAmount: 87.99,
		OrderItems: 'Shoes',
		Location: 'USA',
		Status: 'pending',
		StatusBg: '#FB9678',
		ProductImage:
			'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
	},
	{
		OrderID: 874534,
		CustomerName: 'Danai',
		TotalAmount: 122.99,
		OrderItems: 'Watch',
		Location: 'USA',
		Status: 'canceled',
		StatusBg: '#FF5C8E',
		ProductImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
	},
	{
		OrderID: 38489,
		CustomerName: 'Miron',
		TotalAmount: 87.99,
		OrderItems: 'Ice Cream',
		Location: 'USA',
		Status: 'active',
		StatusBg: '#03C9D7',
		ProductImage:
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
	},
	{
		OrderID: 24546,
		CustomerName: 'Frank',
		TotalAmount: 84.99,
		OrderItems: 'Pan Cake',
		Location: 'Delhi',
		Status: 'complete',
		StatusBg: '#8BE78B',
		ProductImage:
			'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
	},
];
