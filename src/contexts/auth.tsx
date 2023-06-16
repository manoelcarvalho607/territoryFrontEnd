// import React, { createContext, useState, useEffect, useContext } from "react";
// import api from '../services/api';
// import * as auth from "../services/auth";
// import { View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface User {
//     name: string;
//     phone: string;
// }

// interface AuthContextData {
//     signed: boolean;
//     user: User | null;
//     loading: boolean;
//     signIn(): Promise<void>;
//     signOut(): void;
// }

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// export const AuthProvider = ({children}: { children: JSX.Element}) => {
//     const [user, setUser] = useState< User | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function loadStoragedData() {
//             //usar mult get
//           const storagedUser =  await AsyncStorage.getItem('@MTAuth:user');
//           const storagedToken =  await AsyncStorage.getItem('@MTAuth:token');

//           if (storagedUser && storagedToken) {
//             api.defaults.headers['authorization'] = `Bearer ${storagedToken}`;
//             setUser(JSON.parse(storagedUser))
//             setLoading(false);
//           }
//         }

//         loadStoragedData();
//     }, [])

//     async function signIn() {
//        const response = await auth.signIn();
      
//        setUser(response.user);
//        api.defaults.headers['authorization'] = `Bearer ${response.token}`;
//        await AsyncStorage.setItem('@MTAuth:user', JSON.stringify(response.user));
//        await AsyncStorage.setItem('@MTAuth:token', response.token);
//     }

//     function signOut() {
//         AsyncStorage.clear().then(() => {
//             setUser(null);
//         });
        
//     }


   
   
//     return (
//         <AuthContext.Provider value={{ signed: !!user , user, signIn, loading, signOut}}>
//             {children}
//         </AuthContext.Provider>
//     )
        

// };

// export function useAuth() {
//     const context = useContext(AuthContext);
//     return context;
// }