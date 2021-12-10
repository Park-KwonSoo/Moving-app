import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  RootStackParamList,
} from '../config/interface';

import TabNavigator from './tab/TabNavigator';
import MusicNavigator from '../components/music';


const Stack = createStackNavigator<RootStackParamList>();
export default () => {
  return (
    <Stack.Navigator
      screenOptions = {{
        gestureEnabled : true,
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component = {TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name = "MusicNavigator"
        component = {MusicNavigator}
        options = {{
          headerShown : false,
          cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS,
          gestureDirection : 'vertical',
        }}
      />
    </Stack.Navigator>
  );
};
