// /* eslint-disable react/no-unstable-nested-components */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-no-useless-fragment */
// /* eslint-disable react/no-array-index-key */
// /* eslint-disable react/button-has-type */
// import {
// 	GridComponent,
// 	ColumnsDirective,
// 	ColumnDirective,
// 	Page,
// 	Inject,
// 	Edit,
// 	Filter,
// } from '@syncfusion/ej2-react-grids';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { BiEdit } from 'react-icons/bi';
// import { AiFillDelete } from 'react-icons/ai';
// import Cookies from 'js-cookie';
// import { customersGrid } from '../../dummyData/dummy';
// import Header from './Header';
// import CreateProduct from '../../pages/Createproduct';
// import { UpdateProduct } from '../../pages/UpdateProduct';
// import { deleteProduct } from '../../redux/actions/product.action';
// import { getVendorProducts } from '../../redux/actions/vendor.product';
// import { GrAddCircle } from 'react-icons/gr';

// const Products = () => {
// 	const token = Cookies.get('token');
// 	const dispatch = useDispatch();
// 	const [customersData, setCustomerData] = useState(null);
// 	const { vendorProducts } = useSelector((state) => state.vendorProducts);
// 	const [showAddProduct, setShowAddProduct] = useState(false);
// 	const [showUpdateProduct, setShowUpdateProduct] = useState(false);
// 	const [isAddProductVisible, setAddProductVisible] = useState(false);
// 	const [isUpdateProductVisible, setUpdateProductVisible] = useState(false);
// 	const [selectedProduct, setSelectedProduct] = useState(null);

// 	useEffect(() => {
// 		if (vendorProducts) {
// 			const productData = vendorProducts.map((item) => {
// 				return {
// 					CustomerID: item.productId,
// 					ProjectName: item.productName,
// 					Status: 'Active',
// 					StatusBg: '#8BE78B',
// 					Weeks: item.productPrice,
// 					Quantity: item.quantity,
// 				};
// 			});
// 			setCustomerData(productData);
// 		}
// 	}, [vendorProducts]);

// 	const handleAddProductClick = () => {
// 		setShowAddProduct(true);
// 	};

// 	return (
// 		<div className="product m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
// 			<Header category="Page" title="All Products" />
// 			<div className="flex justify-center items-center table-container">
// 				<GridComponent
// 					dataSource={customersData}
// 					enableHover={false}
// 					allowPaging
// 					pageSettings={{ pageSize: 10 }}
// 					className="table cursor-pointer text-2xl"
// 				>
// 					<ColumnsDirective>
// 						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
// 						{customersGrid.map((item, index) => (
// 							<ColumnDirective key={index} {...item} />
// 						))}
// 						<ColumnDirective
// 							field="Actions"
// 							headerText="Actions"
// 							width="120"
// 							textAlign="Center"
// 							template={({ rowData }) => (
// 								<div className="align">
// 									<GrAddCircle
// 										className="addi hover:text-whitetext-blue-600 mr-2 cursor-pointer size={24}"
// 										onClick={() => setAddProductVisible(true)}
// 									/>
// 									<BiEdit
// 										className="edit text-blue-600 mr-2 cursor-pointer size={24}"
// 										onClick={() => setUpdateProductVisible(true)}
// 									/>
// 									<AiFillDelete
// 										className="delete text-red-600 cursor-pointer"
// 										onClick={() => handleDelete(item.productId)}
// 									/>
// 								</div>
// 							)}
// 						/>
// 					</ColumnsDirective>
// 					<Inject services={[Page, Edit, Filter]} />
// 				</GridComponent>
// 			</div>
// 			<div>
// 				{isAddProductVisible && (
// 					<div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 z-50 flex justify-center items-center">
// 						<CreateProduct setShowAddProduct={setAddProductVisible} />
// 					</div>
// 				)}
// 				{isUpdateProductVisible && (
// 					<div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 z-50 flex justify-center items-center">
// 						<UpdateProduct setShowUpdateProduct={setUpdateProductVisible} />
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Products;
