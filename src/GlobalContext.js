import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState('Valor Inicial');
    const [statusSino, setStatusSino] = useState(1);
    const [perfilUsuario, setPerfilUsuario] = useState(null);
    const [iconLogout, setIconLogout] = useState(false);

    return (
        <GlobalContext.Provider value={{
            globalVariable, setGlobalVariable,
            perfilUsuario, setPerfilUsuario,
            statusSino, setStatusSino,
            iconLogout, setIconLogout
        }}>
        {children}
        </GlobalContext.Provider>
    );
};
export default GlobalContextProvider;