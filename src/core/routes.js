import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/pages/Home';
import Tela1 from '~/pages/Tela1';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tela1" component={Tela1} />
    </Stack.Navigator>
  );
};

export default Routes;
