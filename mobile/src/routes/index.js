import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Forgot from '../pages/Forgot';
import Register from '../pages/Register';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="login" component={Login} />
        <Screen name="dashboard" component={Dashboard} />
        <Screen name="forgot" component={Forgot} />
        <Screen name="register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}
