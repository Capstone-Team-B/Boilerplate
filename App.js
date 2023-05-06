import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './client/screens/SignUp';
import SignIn from './client/screens/SignIn';
import AllUsers from './client/screens/AllUsers';
import HomePage from './client/screens/HomePage'
import NavBar from './client/components/NavBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='SignIn'> */}
      {/* <Stack.Navigator initialRouteName='Log In'> */}
      {/* <Stack.Navigator initialRouteName='Users'> */}
      {/* <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Log In" component={SignIn} />
        <Stack.Screen name="Users" component={AllUsers} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator> */}
      <NavBar />
    </NavigationContainer>
  )
}

// add SafeAreaView to components?