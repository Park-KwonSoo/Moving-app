import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabHeaderProps } from '@react-navigation/bottom-tabs';


import MainScreen from '../../components/main';
import MusicChartScreen from '../../components/musicChart';
import SearchScreen from '../../components/search';
import PlaylistScreen from '../../components/playlist';


//메인페이지의 네비게이터
const MainStackNavigator = createStackNavigator();
const MainStack = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStackNavigator.Navigator>
  );
};

//차트 네비게이터
const MusicChartNavigator = createStackNavigator();
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
const SearchNavigator = createStackNavigator();
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
const PlaylistStackNavigator = createStackNavigator();
const PlaylistStack = () => {
  return (
    <PlaylistStackNavigator.Navigator>
      <PlaylistStackNavigator.Screen
        name="PlaylistScreen"
        component={PlaylistScreen}
        options={{
          headerShown: false,
        }}
      />
    </PlaylistStackNavigator.Navigator>
  );
};



//탭 네비게이터 Props : 탭 버튼을 클릭하는 Props
interface TabProps {
  navigation : NavigationProp<{}>;
  route : RouteProp<{}>;
}

//탭 네비게이터 아이콘 Props : 탭 네비게이터 아이콘
interface TabBarIconProps {
  focused : boolean;
  color : string;
  size : number;
}

const Tab = createBottomTabNavigator();
export default ({ navigation, route, ...props } : TabProps) => {

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async() => {
              navigation.navigate(route.name);
            };
            fetchData();
        }, [navigation, route.name])
    );

    return (
      <Tab.Navigator>

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
                  style = {{
                    height : '90%',
                    aspectRatio : 1,
                  }}
                />
                :
                <Image source = {require('../../../assets/home-unfocused.png')}
                  style = {{
                    height : '90%',
                    aspectRatio : 1,
                  }}
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
                  style = {{
                    height : '80%',
                    aspectRatio : 1,
                  }}
                />
                :
                <Image source = {require('../../../assets/music-unfocused.png')}
                  style = {{
                    height : '80%',
                    aspectRatio : 1,
                  }}
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
                  style = {{
                    height : '80%',
                    aspectRatio : 1,
                  }}
                />
                :
                <Image source = {require('../../../assets/search-unfocused.png')}
                  style = {{
                    height : '80%',
                    aspectRatio : 1,
                  }}
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
                  style = {{
                    height : '90%',
                    aspectRatio : 1,
                  }}
                />
                :
                <Image source = {require('../../../assets/my-unfocused.png')}
                  style = {{
                    height : '90%',
                    aspectRatio : 1,
                  }}
                />
              );
            },
          }}
        />

      </Tab.Navigator>
    );
};


const tabStyle = StyleSheet.create({
  position : {
    alignItems : 'center',
    justifyContent : 'center',
  },

});
