import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import {AuthProvider} from "./contexts/auth";


const Index: React.FC = () => {
  return (
    <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
};

export default Index;