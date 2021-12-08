import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useFocusEffect, useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  RootStackParamList,
  MovingDefaultProps,
} from '../../config/interface';

import MainScreen from '../../components/main';
import MusicChartScreen from '../../components/musicChart';
import SearchScreen from '../../components/search';
import PlaylistScreen from '../../components/playlist';


//모든 스크린의 default props
interface ScreenProps extends MovingDefaultProps {}

//메인페이지의 네비게이터
const MainStackNavigator = createStackNavigator<RootStackParamList>();
const MainStack = (props : ScreenProps) => {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<{}>>();

  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="MainScreen"
        options={{
          headerShown: false,
        }}
      >
        {() => <MainScreen navigation = {navigation} route = {route} {...props}/>}
      </MainStackNavigator.Screen>
    </MainStackNavigator.Navigator>
  );
};

//차트 네비게이터
const MusicChartNavigator = createStackNavigator<RootStackParamList>();
const MusicChartStack = (props : ScreenProps) => {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<{}>>();

  return (
    <MusicChartNavigator.Navigator>
      <MusicChartNavigator.Screen
        name = "MusicChartScreen"
        options = {{
          headerShown : false,
        }}
      >
        {() => <MusicChartScreen navigation={navigation} route={route} {...props}/>}
      </MusicChartNavigator.Screen>
    </MusicChartNavigator.Navigator>
  );
};

//검색 네비게이터
const SearchNavigator = createStackNavigator<RootStackParamList>();
const SearchStack = (props : ScreenProps) => {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<{}>>();

  return (
    <SearchNavigator.Navigator>
      <SearchNavigator.Screen
        name = "SearchScreen"
        options = {{
          headerShown : false,
        }}
      >
        {() => <SearchScreen navigation={navigation} route={route} {...props}/>}
      </SearchNavigator.Screen>
    </SearchNavigator.Navigator>
  );
};

//내 보관함 네비게이터
const PlaylistStackNavigator = createStackNavigator<RootStackParamList>();
const PlaylistStack = (props : ScreenProps) => {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<{}>>();

  return (
    <PlaylistStackNavigator.Navigator>
      <PlaylistStackNavigator.Screen
        name="PlaylistScreen"
        options={{
          headerShown: false,
        }}
      >
        {() => <PlaylistScreen navigation={navigation} route={route} {...props}/>}
      </PlaylistStackNavigator.Screen>
    </PlaylistStackNavigator.Navigator>
  );
};



//탭 네비게이터 Props : 탭 버튼을 클릭하는 Props
interface TabProps extends MovingDefaultProps {}

//탭 네비게이터 아이콘 Props : 탭 네비게이터 아이콘
interface TabBarIconProps {
  focused : boolean;
  color : string;
  size : number;
}

const Tab = createBottomTabNavigator();
export default ({...props} : TabProps) => {

  useFocusEffect(
      React.useCallback(() => {
          const fetchData = async() => {
            // navigation.navigate(route.name);
          };
          fetchData();
      }, [])
  );

  return (
    <Tab.Navigator>

      <Tab.Screen
        name = "Main"
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
      >
      {() => <MainStack {...props}/>}
      </Tab.Screen>

      <Tab.Screen
        name = "MusicChart"
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
      >
      {() => <MusicChartStack {...props}/>}
      </Tab.Screen>

      <Tab.Screen
        name = "Search"
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
      >
      {() => <SearchStack {...props}/>}
      </Tab.Screen>

      <Tab.Screen
        name = "Playlist"
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
      >
        {() => <PlaylistStack {...props}/>}
      </Tab.Screen>

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
