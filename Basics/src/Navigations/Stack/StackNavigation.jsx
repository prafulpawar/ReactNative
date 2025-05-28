import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Profile from '../Stack/Screens/Profile';
import Search from '../Stack/Screens/Search';
import Home from '../Stack/Screens/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default StackNavigation;
