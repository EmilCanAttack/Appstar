// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import LedigeKampe from './LedigeKampe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LedigeKampe" component={LedigeKampe} />
        {/* Tilføj flere skærme efter behov, f.eks. hjemmeside */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};