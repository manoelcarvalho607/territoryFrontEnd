import React, { createContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState('Valor Inicial');
    const [statusSino, setStatusSino] = useState(1);
    const [perfilUser, setPerfilUser] = useState(null);
    const [iconLogout, setIconLogout] = useState(false);
    const [ auth, setAuth] = useState('');
    const [authTrue, setAuthTrue] = useState(false);
    const [ modalVisible, setModalVisible] = useState(false);
    const [image, setImage ] = useState(null);
    return (
        <GlobalContext.Provider value={{
            globalVariable, setGlobalVariable,
            perfilUser, setPerfilUser,
            statusSino, setStatusSino,
            iconLogout, setIconLogout,
            auth, setAuth,
            authTrue, setAuthTrue,
            modalVisible, setModalVisible,
            image, setImage
        }}>
        {children}
        </GlobalContext.Provider>
    );
};
export default GlobalContextProvider;