import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab/TabNavigator';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
