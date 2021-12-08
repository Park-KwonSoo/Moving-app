import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  MovingDefaultProps, RootStackParamList,
} from '../config/interface';

import TabNavigator from './tab/TabNavigator';
import MusicNavigator from '../components/music';


//AppStack의 props : App.tsx에서 받아옴
interface AppStackProps extends MovingDefaultProps {}

//Music Navigator의 Prop
interface MusicNavigatorProp {
  navigation : NavigationProp<{}>;
  route : RouteProp<RootStackParamList, 'MusicNavigator'>;
}

const Stack = createStackNavigator<RootStackParamList>();
export default (props : AppStackProps) => {
  return (
    <Stack.Navigator
      screenOptions = {{
        gestureEnabled : true,
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        options={{
          headerShown: false,
        }}
      >
        {() => <TabNavigator {...props}/>}
      </Stack.Screen>

      <Stack.Screen
        name = "MusicNavigator"
        options = {{
          headerShown : false,
          cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS,
          gestureDirection : 'vertical',
        }}
      >
        {({ navigation, route } : MusicNavigatorProp) => <MusicNavigator navigation={navigation} route={route} {...props}/>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
