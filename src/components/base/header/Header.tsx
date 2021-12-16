import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';

import styles from './HeaderStyled';
import { RootStackParamList } from '../../../config/interface';

interface HeaderProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}> | RouteProp<RootStackParamList, 'PlayListDetailScreen'>;
    header : string;
}
const Header = ({ navigation, route, ...props } : HeaderProps) => {

    return (
        <>
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headerWrapper}>
                {
                    route.name === 'PlayListDetailScreen' ?
                    <TouchableOpacity
                        style = {styles.backButtonWrapper}
                        onPress = {() => {
                            navigation.navigate('TabNavigator' as never, {
                                screen : 'PlaylistScreen',
                            } as never);
                        }}
                    >
                        <Image style = {styles.backButtonImg} source = {require('../../../../assets/back.png')}/>
                    </TouchableOpacity> : null
                }
                <Text style = {styles.headerText}>{props.header}</Text>
            </View>
        </SafeAreaView>
        </>
    );
};

export default Header;
