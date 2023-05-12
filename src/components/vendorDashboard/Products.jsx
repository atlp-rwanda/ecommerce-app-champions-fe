/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Inject,
	Edit,
	Filter,
} from '@syncfusion/ej2-react-grids';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { customersGrid } from '../../dummyData/dummy';
import Header from './Header';
import { fetchProducts } from '../../redux/actions/product.action';
import Loader from './Loader';

const Products = () => {
	const dispatch = useDispatch();
	const [customersData, setCustomerData] = useState(null);
	const { loading, error, products } = useSelector((state) => state.products);
	const { items } = products;
	const token = Cookies.get('token');
	useEffect(() => {
		dispatch(fetchProducts(token));
	}, [dispatch, token]);
	useEffect(() => {
		if (items) {
			const productData = items.map((item) => {
				return {
					CustomerID: item.productId,
					CustomerName: item.Vendor.User.firstName,
					CustomerEmail: item.Vendor.User.email,
					ProjectName: item.productName,
					Status: 'Active',
					StatusBg: '#8BE78B',
					Weeks: item.productPrice,
					Location: item.Category.name,
				};
			});
			setCustomerData(productData);
		}
	}, [items]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="product m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
					<Header category="Page" title="All Products" />
					<div className="flex justify-end mb-4">
						<button className=" add rounded-[50px] px-[1.5em] py-[0.5em] bg-primaryGreen w-[200px] text-[#92E3A9] font-bold p-[20px],inset_0px_2px_1px_0px_rgba(255,255,255,0.75)] hover:bg-emerald-500">
							Add Product
						</button>
					</div>
					<div className="flex justify-center items-center table-container">
						<GridComponent
							dataSource={customersData}
							enableHover={false}
							allowPaging
							pageSettings={{ pageCount: 5 }}
							className="table cursor-pointer text-2xl"
						>
							<ColumnsDirective>
								{/* eslint-disable-next-line react/jsx-props-no-spreading */}
								{customersGrid.map((item, index) => (
									<ColumnDirective key={index} {...item} />
								))}
							</ColumnsDirective>
							<Inject services={[Page, Edit, Filter]} />
						</GridComponent>
					</div>
				</div>
			)}
		</>
	);
};

export default Products;
