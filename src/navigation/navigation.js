import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../components/SignUp';
import LoginPage from "../components/LoginPage"
import ContactList from '../components/ContactList';


const Stack= createStackNavigator()

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
      <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{header:()=>null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{header:()=>null}}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactList}
      />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}


