import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import TabNavigator from './tab/TabNavigator';
import Music from '../components/music';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions = {{
        gestureEnabled : true,
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name = "MusicNavigator"
        component = {Music}
        options = {{
          headerShown : false,
          cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS,
          gestureDirection : 'vertical',
        }}
      />
    </Stack.Navigator>
  );
};
