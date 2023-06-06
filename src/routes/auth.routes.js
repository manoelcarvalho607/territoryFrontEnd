import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';


const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="Home" component={Home} title={'LOGIN DE ACESSO'} />
  </AuthStack.Navigator>
};

export default AuthRoutes;