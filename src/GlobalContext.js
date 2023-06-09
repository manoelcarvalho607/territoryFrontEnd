import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState('Valor Inicial');
    const [statusSino, setStatusSino] = useState(1);
    const [perfilUsuario, setPerfilUsuario] = useState(null);
    const [iconLogout, setIconLogout] = useState(false);
    const [ auth, setAuth] = useState('');
    const [authTrue, setAuthTrue] = useState(false);

    return (
        <GlobalContext.Provider value={{
            globalVariable, setGlobalVariable,
            perfilUsuario, setPerfilUsuario,
            statusSino, setStatusSino,
            iconLogout, setIconLogout,
            auth, setAuth,
            authTrue, setAuthTrue
        }}>
        {children}
        </GlobalContext.Provider>
    );
};
export default GlobalContextProvider;