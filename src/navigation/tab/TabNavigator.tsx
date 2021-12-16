import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../../components/main';
import MusicChartScreen from '../../components/musicChart';
import SearchScreen from '../../components/search';
import PlaylistScreen from '../../components/playlist';
import PlayListDetailScreen from '../../components/playListDetail';



//탭 네비게이터 아이콘 Props : 탭 네비게이터 아이콘
interface TabBarIconProps {
  focused : boolean;
  color : string;
  size : number;
}

const Tab = createBottomTabNavigator();
export default () => {

  useFocusEffect(
      React.useCallback(() => {
          const fetchData = async() => {
          };
          fetchData();
      }, [])
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown : false,
        tabBarButton : [
          'PlayListDetailScreen',
        ].includes(route.name)
        ? () => { return null; } : undefined,
      })}
    >

      <Tab.Screen
        name = "MainScreen"
        component = {MainScreen}
        options = {{
          headerShown : false,
          tabBarLabel : '홈',
          tabBarLabelStyle : {...tabStyle.labelStyle},
          tabBarShowLabel : true,
          tabBarIcon : ({ focused } : TabBarIconProps) => {
            return (
              focused ?
              <Image source = {require('../../../assets/home-focused.png')}
                style = {tabStyle.buttonSmall}
              />
              :
              <Image source = {require('../../../assets/home-unfocused.png')}
                style = {tabStyle.buttonSmall}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name = "MusicChartScreen"
        component = {MusicChartScreen}
        options = {{
          headerShown : false,
          tabBarLabel : '차트',
          tabBarLabelStyle : {...tabStyle.labelStyle},
          tabBarShowLabel : true,
          tabBarIcon : ({ focused } : TabBarIconProps) => {
            return (
              focused ?
              <Image source = {require('../../../assets/music-focused.png')}
                style = {tabStyle.buttonLarge}
              />
              :
              <Image source = {require('../../../assets/music-unfocused.png')}
                style = {tabStyle.buttonLarge}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name = "SearchScreen"
        component = {SearchScreen}
        options = {{
          headerShown : false,
          tabBarLabel : '검색',
          tabBarLabelStyle : {...tabStyle.labelStyle},
          tabBarShowLabel : true,
          tabBarIcon : ({ focused } : TabBarIconProps) => {
            return (
              focused ?
              <Image source = {require('../../../assets/search-focused.png')}
                style = {tabStyle.buttonLarge}
              />
              :
              <Image source = {require('../../../assets/search-unfocused.png')}
                style = {tabStyle.buttonLarge}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name = "PlaylistScreen"
        component = {PlaylistScreen}
        options = {{
          headerShown : false,
          tabBarLabel : '보관함',
          tabBarLabelStyle : {...tabStyle.labelStyle},
          tabBarShowLabel : true,
          tabBarIcon : ({ focused } : TabBarIconProps) => {
            return (
              focused ?
              <Image source = {require('../../../assets/my-focused.png')}
                style = {tabStyle.buttonSmall}
              />
              :
              <Image source = {require('../../../assets/my-unfocused.png')}
                style = {tabStyle.buttonSmall}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name = "PlayListDetailScreen"
        component = {PlayListDetailScreen}
      />

    </Tab.Navigator>
  );
};


const tabStyle = StyleSheet.create({
  position : {
    alignItems : 'center',
    justifyContent : 'center',
  },

  buttonSmall : {
    height : '90%',
    aspectRatio : 1,
  },

  buttonLarge : {
    height : '80%',
    aspectRatio : 1,
  },

  labelStyle : {
    fontFamily : 'Cafe24SsurroundAir',
  },

});
