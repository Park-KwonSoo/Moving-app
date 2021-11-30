import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab/TabNavigator';
import PlayingNavigator from '../components/music/playing';
import PlayinhNowListNavigator from '../components/music/playingNowList';

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
      <Stack.Screen
        name = "PlayingNavigator"
        component = {PlayingNavigator}
        options = {{
          headerShown : false,
        }}
      />
      <Stack.Screen
        name = "PlayingNowListNavigator"
        component = {PlayinhNowListNavigator}
        options = {{
          headerShown : false,
        }}
      />
    </Stack.Navigator>
  );
};
