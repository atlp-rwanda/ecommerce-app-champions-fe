import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Auth/Input';
import Button from '../Button/Button';
import {
	createPermission,
	enableAndDisableUserPermission,
} from '../../redux/actions/permission.action';
import { getAllRoles } from '../../redux/actions/role.action';

import Select from '../Auth/Select';

const permissionOptions = [
	{ value: 'admin', text: 'admin' },
	{ value: 'vendor', text: 'vendor' },
	{ value: 'buyer', text: 'buyer' },
];

const UserPermissions = ({ roles }) => {
	const [permissionName, setPermissionName] = useState('');
	const [permissionFor, setPermissionFor] = useState(
		permissionOptions[0].value
	);
	const { token } = useSelector((state) => state.token);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (token) {
			dispatch(
				createPermission(token, {
					permissionFor,
					permissionName: `${permissionFor} ${permissionName}`,
				})
			).then(() => dispatch(getAllRoles(token)));
		}
	};
	const handlePermissionChange = (e) => {
		setPermissionFor(e.target.value);
	};

	const handlePermission = (id, status) => {
		if (token) {
			dispatch(
				enableAndDisableUserPermission(token, id, { permissionStatus: status })
			).then(() => dispatch(getAllRoles(token)));
		}
	};
	return (
		<div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-3 text-black mx-3 w-full">
			<div className="flex flex-col space-y-3 w-full md:w-2/3 ">
				{roles?.map((role) => (
					<div key={role.id}>
						<h2 className="font-bold text-xl py-3">{role.roleName}</h2>
						{role.Permissions?.lenght <= 0 && (
							<div className="text-lightRed text-lg">No permissions</div>
						)}
						{role.Permissions?.map((permission) => (
							<div key={permission.id} className="py-1">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									checked={permission.permissionStatus}
									className="w-5 h-5 cursor-pointer"
									onChange={(e) =>
										handlePermission(permission.id, e.target.checked)
									}
								/>
								<label className="ml-2 text-md font-medium">
									{permission.permissionName}
								</label>
							</div>
						))}
					</div>
				))}
			</div>
			<div className="bg-gray p-5 rounded-md w-full mx-auto h-1/2 md:w-1/3 flex flex-col space-y-3">
				<h1 className="text-2xl text-yellow font-bold">New Permission</h1>
				<form onSubmit={handleSubmit}>
					<Select
						labelFor="role"
						labelText="new Role"
						name="role"
						id="role"
						className="w-full rounded-md appearance-none border-1 border-primaryGreen"
						value={permissionFor}
						options={permissionOptions}
						onChange={handlePermissionChange}
					/>
					<Input
						placeholder="new permission name"
						type="text"
						id="permissionName"
						value={permissionName}
						isRequired
						labelText="permissionName"
						handleChange={(e) => setPermissionName(e.target.value)}
						className="px-2 py-2 my-2 rounded-md appearance-none"
					/>
					<Button
						// loading={loading}
						label="add permission"
						className="bg-primaryGreen text-white py-1 px-3 rounded-md"
					/>
				</form>
			</div>
		</div>
	);
};

export default UserPermissions;
