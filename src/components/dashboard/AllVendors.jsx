/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import { Table, Modal } from 'flowbite-react';
import Button from '../Button/Button';
import Select from '../Auth/Select';
import { assignRoleToUser } from '../../redux/actions/role.action';
import {
	enableVendorAccount,
	disableVendorAccount,
	getAllVendors,
} from '../../redux/actions/vendor.action';
import { getAllBuyers } from '../../redux/actions/buyer.action';

const roleOptions = [
	{ value: 'buyer', text: 'buyer' },
	{ value: 'vendor', text: 'vendor' },
];

const AllVendors = ({ vendor }) => {
	const [visible, setVisible] = useState(false);
	const [userId, setUserId] = useState(null);
	const [role, setRole] = useState('buyer');
	const { token } = useSelector((state) => state.token);
	const { loading } = useSelector((state) => state.role);
	const dispatch = useDispatch();

	const onClick = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const handleRoleChange = (e) => {
		setRole(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (token) {
			dispatch(
				assignRoleToUser(token, userId, { prevRole: 'vendor', newRole: role })
			).then(() => {
				dispatch(getAllVendors(token));
				dispatch(getAllBuyers(token));
			});
		}
	};
	const handleEnableVendor = (id) => {
		if (token) {
			dispatch(enableVendorAccount(token, id)).then(() =>
				dispatch(getAllVendors(token))
			);
		}
	};
	const handleDisableVendor = (id) => {
		if (token) {
			dispatch(disableVendorAccount(token, id)).then(() =>
				dispatch(getAllVendors(token))
			);
		}
	};
	return (
		<div className="text-oxford_blue font-normal w-full -mx-5">
			<Table>
				<Table.Head>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>Email</Table.HeadCell>
					<Table.HeadCell>Role</Table.HeadCell>
					<Table.HeadCell>Reports</Table.HeadCell>
					<Table.HeadCell>Status</Table.HeadCell>
					<Table.HeadCell>Action</Table.HeadCell>
				</Table.Head>
				{vendor?.map((item) => (
					<Table.Body className="divide-y" key={item.id}>
						<Table.Row className="bg-white">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{item?.User?.firstName}
							</Table.Cell>
							<Table.Cell className="text-yellow">
								{item?.User?.email}
							</Table.Cell>
							<Table.Cell
								className="cursor-pointer underline"
								onClick={() => {
									setUserId(item.UserId);
									onClick();
								}}
							>
								vendor
							</Table.Cell>
							<Table.Cell className="underline cursor-pointer">
								{item?.ReportedActivities.length}
							</Table.Cell>
							<Table.Cell
								className={`cursor-pointer ${
									item?.User?.active === true
										? 'text-primaryGreen '
										: ' text-lightRed '
								}`}
							>
								{item?.User?.active === true ? 'active' : 'inactive'}
							</Table.Cell>
							<Table.Cell className="flex space-x-3 items-center">
								<span
									className={`cursor-pointer ${
										item?.User?.active === true
											? 'text-lightRed'
											: 'text-primaryGreen'
									}`}
									onClick={() =>
										item?.User?.active === true
											? handleDisableVendor(item.UserId)
											: handleEnableVendor(item.UserId)
									}
								>
									{item?.User?.active === true ? 'deactivate' : 'activate'}
								</span>
								<BsFillTrashFill
									size={20}
									className="text-lightRed cursor-pointer"
								/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				))}
			</Table>
			<Modal
				show={visible}
				size="md"
				popup
				onClose={onClose}
				className="bg-black "
			>
				<Modal.Header>
					<h3 className="mb-3 text-lg font-bold text-primaryGreen">
						Change user Role
					</h3>
				</Modal.Header>
				<Modal.Body>
					<div>
						<form
							className="flex flex-col space-y-2 justify-center"
							onSubmit={handleSubmit}
						>
							<Select
								labelFor="role"
								labelText="prev Role"
								name="role"
								id="role"
								className="w-full rounded-md appearance-none border-1 border-primaryGreen"
								value="vendor"
								options={roleOptions}
								disabled
							/>
							<Select
								labelFor="role"
								labelText="new Role"
								name="role"
								id="role"
								className="w-full rounded-md appearance-none border-1 border-primaryGreen"
								value={role}
								options={roleOptions}
								onChange={handleRoleChange}
							/>
							<Button
								loading={loading}
								label="submit"
								className="bg-primaryGreen text-white py-1 px-3 rounded-md"
							/>
						</form>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default AllVendors;
