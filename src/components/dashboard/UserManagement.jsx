/* eslint-disable react/style-prop-object */
import React, { useRef, useEffect } from 'react';
import { Tabs } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import AllVendors from './AllVendors';
import AllBuyers from './AllBuyers';
import LoadingSpinner from '../LoadingSpinner';
import { handleToken } from '../../redux/actions/token.action';
import { getAllVendors } from '../../redux/actions/vendor.action';
import { getAllBuyers } from '../../redux/actions/buyer.action';
import { getAllRoles } from '../../redux/actions/role.action';
import Roles from './Roles';
import UserPermissions from './UserPermissions';

const UserManagement = () => {
	const { vendors, loading, error } = useSelector((state) => state.vendor);
	const { roles } = useSelector((state) => state.role);
	const { buyers } = useSelector((state) => state.buyer);
	const { token } = useSelector((state) => state.token);
	const tabsRef = useRef();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	useEffect(() => {
		if (token) {
			dispatch(getAllVendors(token));
			dispatch(getAllBuyers(token));
			dispatch(getAllRoles(token));
		}
	}, [dispatch, token]);
	return (
		<div className="w-full mx-5 overflow-hidden mt-16 md:mt-0">
			<div className="w-11/12">
				<Tabs.Group
					aria-label="Tabs with underline"
					className="text-primaryGreen"
					style="underline"
					ref={tabsRef}
				>
					<Tabs.Item active title="Buyers">
						{loading === true && error == null && (
							<LoadingSpinner className="w-9 h-9 text-gray-200 animate-spin fill-primaryGreen mx-auto" />
						)}
						{loading === false && error != null && (
							<div className="text-lightRed">{error}</div>
						)}
						{buyers != null && <AllBuyers buyer={buyers.data} />}
					</Tabs.Item>
					<Tabs.Item title="Vendors">
						{loading === true && error == null && (
							<LoadingSpinner className="w-9 h-9 text-gray-200 animate-spin fill-primaryGreen mx-auto" />
						)}
						{loading === false && error != null && (
							<div className="text-lightRed">{error}</div>
						)}
						{vendors != null && <AllVendors vendor={vendors.data} />}
					</Tabs.Item>
					<Tabs.Item title="Roles">
						{loading === true && error == null && (
							<LoadingSpinner className="w-9 h-9 text-gray-200 animate-spin fill-primaryGreen mx-auto" />
						)}
						{loading === false && error != null && (
							<div className="text-lightRed">{error}</div>
						)}
						{roles != null && <Roles roles={roles.data} />}
					</Tabs.Item>
					<Tabs.Item title="permissions">
						{loading === true && error == null && (
							<LoadingSpinner className="w-9 h-9 text-gray-200 animate-spin fill-primaryGreen mx-auto" />
						)}
						{loading === false && error != null && (
							<div className="text-lightRed">{error}</div>
						)}
						{roles != null && <UserPermissions roles={roles.data} />}
					</Tabs.Item>
				</Tabs.Group>
			</div>
		</div>
	);
};

export default UserManagement;
