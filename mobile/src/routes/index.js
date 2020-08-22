import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Register from '../pages/Register';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Main" component={Main} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}
