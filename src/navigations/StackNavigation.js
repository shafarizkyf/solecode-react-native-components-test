import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilScreen from '../screens/ProfileScreen';
import PersonalInformation from '../screens/PersonalInformation';
import AddFamilyScreen from '../screens/AddFamilyScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
    <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
    <Stack.Screen name="AddFamilyScreen" component={AddFamilyScreen} />
  </Stack.Navigator>
);

export default StackNavigation;