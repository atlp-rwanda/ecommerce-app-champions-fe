import React, { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Table, Modal } from 'flowbite-react';
import Button from '../Button/Button';
import Input from '../Auth/Input';
import {
	createRole,
	getAllRoles,
	deleteRole,
} from '../../redux/actions/role.action';

const Roles = ({ roles }) => {
	const [visible, setVisible] = useState(false);
	const [roleName, setRoleName] = useState('');
	const { token } = useSelector((state) => state.token);
	const dispatch = useDispatch();

	const onClick = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const handleChange = (e) => {
		setRoleName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (token) {
			dispatch(createRole(token, { roleName })).then(() =>
				dispatch(getAllRoles(token))
			);
		}
	};

	const handleDeleteRole = (id) => {
		if (token) {
			dispatch(deleteRole(token, id)).then(() => dispatch(getAllRoles(token)));
		}
	};

	return (
		<div className="text-oxford_blue font-normal w-full -ml-5 ">
			<div className="flex justify-end mb-2">
				<Button
					onClick={onClick}
					className="bg-primaryGreen text-white rounded-md py-1 px-2"
					label="new Role"
				/>

				<Modal
					show={visible}
					size="md"
					popup
					onClose={onClose}
					className="bg-black "
				>
					<Modal.Header>
						<h3 className="text-2xl font-bold text-primaryGreen text-center">
							create a new Role
						</h3>
					</Modal.Header>
					<Modal.Body>
						<div>
							<form
								className="flex flex-col space-y-2 justify-center"
								onSubmit={handleSubmit}
							>
								<Input
									placeholder="New Role"
									type="text"
									id="role"
									value={roleName}
									isRequired
									labelText="RoleName"
									handleChange={handleChange}
									className="px-2 py-2 my-2 rounded-md appearance-none"
								/>
								<Button
									label="submit"
									className="bg-primaryGreen text-white py-1 px-3 rounded-md"
								/>
							</form>
						</div>
					</Modal.Body>
				</Modal>
			</div>
			<Table>
				<Table.Head>
					<Table.HeadCell>Role Name</Table.HeadCell>
					<Table.HeadCell>Actions</Table.HeadCell>
				</Table.Head>
				{roles.map((item) => (
					<Table.Body className="divide-y" key={item.id}>
						<Table.Row className="bg-white">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{item.roleName}
							</Table.Cell>
							<Table.Cell className="flex space-x-10 items-center">
								<BsFillTrashFill
									size={20}
									className="text-lightRed cursor-pointer"
									onClick={() => handleDeleteRole(item.id)}
								/>
								<BsFillPencilFill
									size={20}
									className="text-primaryGreen cursor-pointer"
								/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				))}
			</Table>
			<ToastContainer />
		</div>
	);
};

export default Roles;
