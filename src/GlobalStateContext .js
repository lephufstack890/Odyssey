import React, { createContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [token, setToken] = useState('');

    return <GlobalStateContext.Provider value={{ token, setToken }}>{children}</GlobalStateContext.Provider>;
};

export default GlobalStateContext;
