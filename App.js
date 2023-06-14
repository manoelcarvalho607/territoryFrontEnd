import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Header from './src/views/Componentes/Header';
 import GlobalContextProvider from './src/GlobalContext';


import Home from './src/views/Home';
import Menu from './src/views/Menu';
import RegisterGroup from './src/views/RegisterGroup';
import RegisterMap from './src/views/RegisterMap';
import RegisterUser from './src/views/RegisterUser';
import RequestMap from './src/views/RequestMap';

// Desabilita os alertas.
console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            title: 'LOGIN DE ACESSO',
          },
        },
        Menu: {
          screen: Menu,
          navigationOptions: {
            title: 'MENU',
          },
        },
        RegisterGroup: {
          screen: RegisterGroup,
          navigationOptions: {
            title: 'REGISTRO DE GRUPO',
          },
        },
        RegisterMap: {
          screen: RegisterMap,
          navigationOptions: {
            title: 'REGISTRO DE MAPA',
          },
        },
          RegisterUser: {
            screen: RegisterUser,
            navigationOptions: {
              title: 'REGISTRO DE USUÁRIO',
            },
          },
          RequestMap: {
            screen: RequestMap,
            navigationOptions: {
              title: 'MEU TERRITÓRIO',
            },
          }
       },
    {
      initialRouteName: 'Home',
    },


);

const Routes = createAppContainer(AppNavigator);



export default function App() {
  return (
    <GlobalContextProvider>
      <Routes/>
    </GlobalContextProvider>
    
  )
}
