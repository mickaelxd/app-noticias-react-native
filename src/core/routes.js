import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/pages/Home';
import CreateNews from '~/pages/CreateNews';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Noticias' }}
      />
      <Stack.Screen
        name="CreateNews"
        component={CreateNews}
        options={{ title: 'Criar Nova Noticia' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
