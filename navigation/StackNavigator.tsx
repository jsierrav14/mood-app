import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details} from '../screens/Details';
import {Journal} from '../screens/Journal';
import {Entry} from '../screens/Entry';
import TabsNavigator from './TabsNavigator';
import RoutesProps from '../types/RoutesProps';
import { Login } from '../screens/Login';

const Stack = createNativeStackNavigator<RoutesProps>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={TabsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Journal"
        component={Journal}
        options={{title: 'Journal'}}
      />
      <Stack.Screen name="Entry" component={Entry} options={{title: 'Entry'}} />
      <Stack.Screen
        name="Detail"
        component={Details}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};
