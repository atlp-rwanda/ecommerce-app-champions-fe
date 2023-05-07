/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// eslint-disable-next-line no-unused-vars
const initialState = {
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);

	return (
		<StateContext.Provider value={{ activeMenu, setActiveMenu }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
