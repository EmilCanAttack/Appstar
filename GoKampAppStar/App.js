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
import GoKamp from './GoKamp';
import Paddel from './Paddel';
import PaddelLedigeBaner from './PaddelLedigeBaner'
import PaddelLedigeKampe from './PaddelLedigeKampe'
import PaddelForum from './PaddelForum'
import PaddelResultater from './PaddelResultater'
import Basketball from './Basketball';
import BasketballLedigeBaner from './BasketballLedigeBaner'
import BasketballLedigeKampe from './BasketballLedigeKampe'
import BasketballForum from './BasketballForum'
import BasketballResultater from './BasketballResultater'

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
        <Stack.Screen name="GoKamp" component={GoKamp} />
        <Stack.Screen name="Paddel" component={Paddel} />
        <Stack.Screen name="BasketballLedigeKampe" component={BasketballLedigeKampe} />
        <Stack.Screen name="BasketballResultater" component={BasketballResultater} />
        <Stack.Screen name="BasketballForum" component={BasketballForum} />
        <Stack.Screen name="BasketballLedigeBaner" component={BasketballLedigeBaner} />
        <Stack.Screen name="Basketball" component={Basketball} />
        <Stack.Screen name="PaddelLedigeBaner" component={PaddelLedigeBaner} />
        <Stack.Screen name="PaddelLedigeKampe" component={PaddelLedigeKampe} />
        <Stack.Screen name="PaddelResultater" component={PaddelResultater} />
        <Stack.Screen name="PaddelForum" component={PaddelForum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
