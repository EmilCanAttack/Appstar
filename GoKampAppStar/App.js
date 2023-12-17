import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import LedigeKampe from './LedigeKampe';
import Forum from './Forum';
import Resultater from './Resultater';
import LedigeBaner from './LedigeBaner';

// Opret en navigation stack til at håndtere forskellige skærme.
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        {/* Definer ruter til forskellige skærme og komponenter. */}
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LedigeKampe" component={LedigeKampe} />
        <Stack.Screen name="Resultater" component={Resultater} />
        <Stack.Screen name="Forum" component={Forum} />
        <Stack.Screen name="LedigeBaner" component={LedigeBaner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
