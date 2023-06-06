import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../views/Menu';


const AuthStack = createStackNavigator();

const AppRoutes = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="Menu" component={Menu} title={'MENU DE OPERAÇÕES'} />
  </AuthStack.Navigator>
};

export default AppRoutes;