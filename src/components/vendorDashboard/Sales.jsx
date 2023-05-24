// import {
// 	GridComponent,
// 	ColumnsDirective,
// 	ColumnDirective,
// 	Resize,
// 	Sort,
// 	ContextMenu,
// 	Filter,
// 	Page,
// 	ExcelExport,
// 	PdfExport,
// 	Edit,
// 	Inject,
// } from '@syncfusion/ej2-react-grids';
// import { ordersData, ordersGrid } from '../../dummyData/dummy';
// import Header from './Header';

// const Sales = () => {
// 	return (
// 		<div className="sales m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
// 			<Header category="Page" title="Sales" />
// 			<div className="flex justify-center items-center">
// 				<GridComponent
// 					id="gridcomp"
// 					dataSource={ordersData}
// 					allowPaging
// 					allowSorting
// 				>
// 					<ColumnsDirective>
// 						{ordersGrid.map((item, index) => (
// 							<ColumnDirective key={index} {...item} />
// 						))}
// 					</ColumnsDirective>
// 					<Inject
// 						services={[
// 							Resize,
// 							Sort,
// 							ContextMenu,
// 							Filter,
// 							Page,
// 							ExcelExport,
// 							Edit,
// 							PdfExport,
// 						]}
// 					/>
// 				</GridComponent>
// 			</div>
// 		</div>
// 	);
// };

// export default Sales;
