import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  RootStackParamList,
} from '../../config/interface';

import MainScreen from '../../components/main';
import MusicChartScreen from '../../components/musicChart';
import SearchScreen from '../../components/search';
import PlaylistScreen from '../../components/playlist';
import PlayListDetailScreen from '../../components/playListDetail';


//메인페이지의 네비게이터
const MainStackNavigator = createStackNavigator<RootStackParamList>();
const MainStack = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="MainScreen"
        component = {MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStackNavigator.Navigator>
  );
};

//차트 네비게이터
const MusicChartNavigator = createStackNavigator<RootStackParamList>();
const MusicChartStack = () => {
  return (
    <MusicChartNavigator.Navigator>
      <MusicChartNavigator.Screen
        name = "MusicChartScreen"
        component = {MusicChartScreen}
        options = {{
          headerShown : false,
        }}
      />
    </MusicChartNavigator.Navigator>
  );
};

//검색 네비게이터
const SearchNavigator = createStackNavigator<RootStackParamList>();
const SearchStack = () => {
  return (
    <SearchNavigator.Navigator>
      <SearchNavigator.Screen
        name = "SearchScreen"
        component = {SearchScreen}
        options = {{
          headerShown : false,
        }}
      />
    </SearchNavigator.Navigator>
  );
};

//내 보관함 네비게이터
const PlaylistStackNavigator = createStackNavigator<RootStackParamList>();
const PlaylistStack = () => {
  return (
    <PlaylistStackNavigator.Navigator>
      <PlaylistStackNavigator.Screen
        name="PlaylistScreen"
        component = {PlaylistScreen}
        options={{
          headerShown: false,
        }}
      />
    </PlaylistStackNavigator.Navigator>
  );
};


//플레이리스트 상세정보 네비게이터
const PlayListDetailStackNavigator = createStackNavigator<RootStackParamList>();
const PlayListDetailStack = () => {
  return (
    <PlayListDetailStackNavigator.Navigator>
      <PlayListDetailStackNavigator.Screen
        name="PlayListDetailScreen"
        component = {PlayListDetailScreen}
        options={{
          headerShown : false,
        }}
      />
    </PlayListDetailStackNavigator.Navigator>
  );
};



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
            // navigation.navigate(route.name);
          };
          fetchData();
      }, [])
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown : false,
        tabBarButton : [
          'PlayListDetail',
        ].includes(route.name)
        ? () => { return null; } : undefined,
      })}
    >

      <Tab.Screen
        name = "Main"
        component = {MainStack}
        options = {{
          headerShown : false,
          tabBarLabel : '홈',
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
        name = "MusicChart"
        component = {MusicChartStack}
        options = {{
          headerShown : false,
          tabBarLabel : '차트',
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
        name = "Search"
        component = {SearchStack}
        options = {{
          headerShown : false,
          tabBarLabel : '검색',
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
        name = "Playlist"
        component = {PlaylistStack}
        options = {{
          headerShown : false,
          tabBarLabel : '보관함',
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
        name = "PlayListDetail"
        component = {PlayListDetailStack}
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

});
